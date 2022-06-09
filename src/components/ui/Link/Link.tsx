import type { ElementType } from 'react'
import { Link as GatsbyLink } from 'gatsby'
import type { GatsbyLinkProps } from 'gatsby'
import { Link as UILink } from '@faststore/ui'
import type { LinkProps as UILinkProps } from '@faststore/ui'

import styles from './link.module.scss'

// From Gatsby's internals: https://github.com/gatsbyjs/gatsby/blob/2975c4d1271e3da52b531ad2f49261c362e5ae13/packages/gatsby-link/src/index.js#L42-L46
function isExternalLink(href: string) {
  return (
    href.startsWith('http://') ||
    href.startsWith('https://') ||
    href.startsWith('//')
  )
}

type Variant = 'default' | 'display' | 'footer' | 'inline'
type FrameworkLinkProps = Omit<GatsbyLinkProps<Record<string, unknown>>, 'to'>

export type LinkProps<T extends ElementType = ElementType<FrameworkLinkProps>> =
  FrameworkLinkProps &
    UILinkProps<T> & {
      href: string
      variant?: Variant
      inverse?: boolean
    }

function Link<T extends ElementType = ElementType<FrameworkLinkProps>>({
  href,
  inverse,
  variant = 'default',
  ...otherProps
}: LinkProps<T>) {
  const defaultProps = {
    'data-fs-link': true,
    'data-fs-link-variant': variant,
    'data-fs-link-inverse': inverse,
    className: styles.fsLink,
  }

  if (isExternalLink(href)) {
    return <UILink href={href} {...defaultProps} {...otherProps} />
  }

  return <UILink as={GatsbyLink} to={href} {...defaultProps} {...otherProps} />
}

export default Link
