import { useEffect, useRef, useState } from 'react'
import { useUI } from 'src/sdk/ui'
import Icon from 'src/components/ui/Icon'

function Toast() {
  const { toasts, popToast } = useUI()
  const toast = toasts[toasts.length - 1]
  const ref = useRef<NodeJS.Timeout[]>([])

  const [fade, setFade] = useState<'in' | 'out'>('in')

  useEffect(() => {
    const id = setTimeout(() => setFade('out'), 2e3)

    ref.current.push(id)
  }, [])

  if (toast === undefined) {
    return null
  }

  return (
    <div
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
        {toast.title && <p data-fs-toast-content-title>{toast.title}</p>}
        <p data-fs-toast-content-message>{toast.message}</p>
      </div>
    </div>
  )
}

export default Toast
