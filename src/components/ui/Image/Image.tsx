import { forwardRef, memo } from 'react'
import { Helmet } from 'react-helmet-async'

import { useImage } from './useImage'
import type { ImageOptions } from './useImage'

// React still don't have imageSizes declared on its types. Somehow,
// it generated the right html
declare module 'react' {
  interface ImgHTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    fetchpriority?: string
  }

  interface LinkHTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    imageSizes?: string
    fetchpriority?: string
  }
}

interface Props extends ImageOptions {
  preload?: boolean
  fetchPriority?: string
}

const Image = forwardRef<HTMLImageElement, Props>(
  ({ preload = false, fetchPriority, ...otherProps }, ref) => {
    const imgProps = useImage(otherProps)
    const { src, sizes = '100vw', srcSet } = imgProps

    return (
      <>
        {preload && (
          <Helmet>
            <link
              as="image"
              rel="preload"
              href={src}
              imageSrcSet={srcSet}
              imageSizes={sizes}
              fetchpriority={fetchPriority}
            />
          </Helmet>
        )}
        <img
          ref={ref}
          data-fs-image
          {...imgProps}
          alt={imgProps.alt}
          fetchpriority={fetchPriority}
        />
      </>
    )
  }
)

Image.displayName = 'Image'
export default memo(Image)
