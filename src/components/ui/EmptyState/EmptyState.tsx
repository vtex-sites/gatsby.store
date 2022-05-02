import type { PropsWithChildren } from 'react'

function EmptyState({ children }: PropsWithChildren<unknown>) {
  return <section data-fs-empty-state>{children}</section>
}

export default EmptyState
