import { useEffect, useRef, useState } from 'react'
import { useUI } from 'src/sdk/ui'
import Icon from 'src/components/ui/Icon'

function Toast() {
  const { toasts, popToast } = useUI()
  const toast = toasts[toasts.length - 1]
  const timeoutRef = useRef<NodeJS.Timeout>()

  const [fade, setFade] = useState<'in' | 'out'>()

  useEffect(() => {
    toast && setFade('in')
  }, [toast])

  useEffect(() => {
    if (fade !== 'in') {
      return undefined
    }

    timeoutRef.current = setTimeout(() => setFade('out'), 6e3)

    return () => timeoutRef.current && clearTimeout(timeoutRef.current)
  }, [fade])

  if (toast === undefined) {
    return null
  }

  return (
    <div
      role="status"
      data-fs-toast
      data-fs-toast-state={fade}
      onAnimationEnd={() => fade === 'out' && popToast()}
    >
      {toast.icon && (
        <div data-fs-toast-icon-container>
          <Icon name={toast.icon} width={30} height={30} />
        </div>
      )}
      <div data-fs-toast-content>
        {toast.title && <p data-fs-toast-title>{toast.title}</p>}
        <p data-fs-toast-message>{toast.message}</p>
      </div>
    </div>
  )
}

export default Toast
