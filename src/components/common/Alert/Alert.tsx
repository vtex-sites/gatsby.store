import { useCallback, useState } from 'react'
import type { ReactNode } from 'React'
import UIAlert from 'src/components/ui/Alert'
import { mark } from 'src/sdk/tests/mark'
import Icon from 'src/components/ui/Icon'

interface Props {
  icon: string
  text: ReactNode
  linkText?: string
  actionLink?: string
  dismissible: boolean
}
function Alert({
  icon,
  text,
  linkText,
  actionLink,
  dismissible = false,
}: Props) {
  const [displayAlert, setDisplayAlert] = useState(true)

  const onAlertClose = useCallback(
    () => setDisplayAlert(false),
    [setDisplayAlert]
  )

  if (displayAlert === false) {
    return null
  }

  const link =
    actionLink && linkText ? { to: actionLink, text: linkText } : undefined

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
