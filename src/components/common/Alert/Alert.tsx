import { useCallback, useState } from 'react'
import type { ReactNode } from 'React'
import UIAlert from 'src/components/ui/Alert'
import { mark } from 'src/sdk/tests/mark'
import Icon from 'src/components/ui/Icon'

interface Props {
  icon: string
  text: ReactNode
  link?: {
    to: string
    text: string
  }
  dismissible: boolean
}
function Alert({ icon, text, link, dismissible = false }: Props) {
  const [displayAlert, setDisplayAlert] = useState(true)

  const onAlertClose = useCallback(
    () => setDisplayAlert(false),
    [setDisplayAlert]
  )

  if (displayAlert === false) {
    return null
  }

  return (
    <UIAlert
      icon={<Icon name={icon} width={24} height={24} />}
      dismissible={dismissible}
      onClose={onAlertClose}
      link={link}
    >
      {text}
    </UIAlert>
  )
}

Alert.displayName = 'Alert'

export default mark(Alert)
