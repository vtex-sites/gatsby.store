import type { PropsWithChildren } from 'react'

function EmptyState({ children }: PropsWithChildren<unknown>) {
  return (
    <section className="empty-state" data-fs-empty-state>
      {children}
    </section>
  )
}

export default EmptyState
