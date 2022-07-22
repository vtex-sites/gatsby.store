import type { GatsbyNode } from 'gatsby'

import { extendedSchema } from './src/server'

export const onCreateWebpackConfig: GatsbyNode['onCreateWebpackConfig'] = ({
  actions: { setWebpackConfig },
  stage,
}) => {
  const isProfilingEnabled = process.env.GATSBY_STORE_PROFILING === 'true'

  if (stage === 'build-javascript') {
    if (isProfilingEnabled) {
      setWebpackConfig({
        optimization: {
          minimize: false,
          moduleIds: 'named',
          chunkIds: 'named',
          concatenateModules: false,
        },
      })
    } else {
      setWebpackConfig({
        optimization: {
          runtimeChunk: {
            name: `webpack-runtime`,
          },
          splitChunks: {
            name: false,
            cacheGroups: {
              styles: {
                name: `styles`,
                test: /\.(css|scss)$/,
                chunks: `initial`,
                enforce: true,
              },
            },
          },
        },
      })
    }
  }
}

export const onCreateBabelConfig: GatsbyNode['onCreateBabelConfig'] = ({
  actions,
}) => {
  actions.setBabelPlugin({
    name: `@faststore/graphql-utils/babel`,
    options: {},
  })
}

export const createSchemaCustomization: GatsbyNode['createSchemaCustomization'] =
  async (gatsbyApi) => {
    const { actions } = gatsbyApi

    // const schema = await faststoreApiSchema
    const schema = await extendedSchema

    actions.addThirdPartySchema({ schema })
  }
