import { forwardRef, memo } from 'react'
import { Helmet } from 'react-helmet-async'

import { useImage } from './useImage'
import type { ImageOptions } from './useImage'

// React still don't have imageSizes declared on its types. Somehow,
// it generated the right html
declare module 'react' {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    imageSizes?: string
    fetchpriority?: string
  }
}

interface Props extends ImageOptions {
  preload?: boolean
}

const Image = forwardRef<HTMLImageElement, Props>(
  ({ preload = false, fetchpriority, ...otherProps }, ref) => {
    const imgProps = useImage(otherProps)
    const { src, sizes = '100vw', srcSet } = imgProps

    return (
      <>
        {preload && (
          <Helmet
            link={[
              {
                as: 'image',
                rel: 'preload',
                href: src,
                imagesrcset: srcSet,
                imagesizes: sizes,
                fetchpriority,
              } as any,
            ]}
          />
        )}
        <img
          ref={ref}
          data-store-image
          {...imgProps}
          alt={imgProps.alt}
          fetchpriority={fetchpriority}
        />
      </>
    )
  }
)

Image.displayName = 'Image'
export default memo(Image)
