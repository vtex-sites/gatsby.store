import { forwardRef, useMemo } from 'react'
import type { Ref, ElementType, AnchorHTMLAttributes } from 'react'
import { Link as GatsbyLink } from 'gatsby'
import type { GatsbyLinkProps } from 'gatsby'
import { Link as UILink } from '@faststore/ui'
import type { LinkProps as UILinkProps } from '@faststore/ui'

import styles from './link.module.scss'

// From Gatsby's internals: https://github.com/gatsbyjs/gatsby/blob/2975c4d1271e3da52b531ad2f49261c362e5ae13/packages/gatsby-link/src/index.js#L42-L46
function externalLinkChecker(href: string) {
  return (
    href.startsWith('//') ||
    href.startsWith('http://') ||
    href.startsWith('https://')
  )
}

type Variant = 'default' | 'display' | 'footer' | 'inline'
type FrameworkLinkProps = Omit<GatsbyLinkProps<Record<string, unknown>>, 'to'>

export type LinkProps<T extends ElementType = 'a'> = UILinkProps<T> &
  FrameworkLinkProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string
    variant?: Variant
    inverse?: boolean
    externalLink?: boolean
  }

const Link = forwardRef<HTMLAnchorElement, LinkProps>(function Link<
  T extends ElementType = 'a'
>(
  {
    href,
    inverse,
    children,
    externalLink,
    variant = 'default',
    ...otherProps
  }: LinkProps<T>,
  ref: Ref<HTMLAnchorElement> | undefined
) {
  const isExternalLink = useMemo(() => externalLinkChecker(href), [href])

  if (externalLink || isExternalLink) {
    return (
      <UILink
        ref={ref}
        href={href}
        data-fs-link
        data-fs-link-variant={variant}
        data-fs-link-inverse={inverse}
        className={styles.fsLink}
        {...otherProps}
      >
        {children}
      </UILink>
    )
  }

  return (
    <UILink
      as={GatsbyLink}
      to={href}
      data-fs-link
      data-fs-link-variant={variant}
      data-fs-link-inverse={inverse}
      className={styles.fsLink}
      {...otherProps}
    >
      {children}
    </UILink>
  )
})

export default Link
