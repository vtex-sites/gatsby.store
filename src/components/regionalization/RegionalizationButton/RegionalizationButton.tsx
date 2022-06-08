import { useSession } from '@faststore/sdk'
import Button from 'src/components/ui/Button'
import Icon from 'src/components/ui/Icon'
import { useUI } from 'src/sdk/ui/Provider'
import type { HTMLAttributes } from 'react'

interface RegionalizationButtonProps extends HTMLAttributes<HTMLDivElement> {
  classes: string
}

export default function RegionalizationButton({
  classes,
  ...otherProps
}: RegionalizationButtonProps) {
  const { openModal } = useUI()
  const { postalCode } = useSession()

  return (
    <div data-fs-regionalization-button className={classes} {...otherProps}>
      <Button
        variant="tertiary"
        size="small"
        icon={<Icon name="MapPin" width={24} height={24} />}
        iconPosition="left"
        onClick={openModal}
      >
        <span>{postalCode ?? 'Set your location'}</span>
      </Button>
    </div>
  )
}
