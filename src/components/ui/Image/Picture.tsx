import { Fragment, memo } from 'react'
import { Helmet } from 'react-helmet-async'
import type { HTMLAttributes } from 'react'

import { useSources } from './useSources'
import type { SourceOptions } from './useSources'
import type { ImageOptions } from './useImage'

interface Props extends HTMLAttributes<HTMLPictureElement> {
  sources: SourceOptions[]
  img: ImageOptions
  preload?: boolean
}

function Picture({
  sources: sourceOptions,
  img: imgProps,
  preload = false,
  ...otherProps
}: Props) {
  const sources = useSources(sourceOptions)

  return (
    <picture>
      {sources.map(({ srcSet, media, height, preloadLinks }, index) => {
        return (
          <Fragment key={index}>
            {preload && (
              <Helmet
                link={preloadLinks.map(
                  (href: string) =>
                    ({
                      as: 'image',
                      rel: 'preload',
                      href,
                      media,
                    } as any)
                )}
              />
            )}
            <source key={index} srcSet={srcSet} media={media} height={height} />
          </Fragment>
        )
      })}
      <img {...imgProps} alt={imgProps.alt} {...otherProps} />
    </picture>
  )
}

export default memo(Picture)
