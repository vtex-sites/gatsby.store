import { Link as UILink } from '@faststore/ui'
import { Link as GatsbyLink } from 'gatsby'
import type { ElementType } from 'react'
import type { LinkProps as UILinkProps } from '@faststore/ui'

type Variant = 'default' | 'display' | 'footer' | 'inline'

export type LinkProps<T extends ElementType = typeof GatsbyLink> =
  UILinkProps<T> & {
    variant?: Variant
    inverse?: boolean
  }

function Link<T extends ElementType = typeof GatsbyLink>({
  variant = 'default',
  inverse,
  to,
  ...otherProps
}: LinkProps<T>) {
  return (
    <UILink
      as={GatsbyLink}
      data-fs-link
      data-fs-link-variant={variant}
      data-fs-link-inverse={inverse}
      to={to}
      {...otherProps}
    />
  )
}

export default Link
