import type { GatsbyFunctionRequest, GatsbyFunctionResponse } from 'gatsby'

const foo = async () => {
  throw Error('This was intended')
}

const handler = async (
  _req: GatsbyFunctionRequest,
  _res: GatsbyFunctionResponse
) => {
  await foo()
}

export default handler
