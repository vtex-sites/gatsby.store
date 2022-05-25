import { Checkbox as UICheckbox } from '@faststore/ui'
import type { CheckboxProps as UICheckboxProps } from '@faststore/ui'

export type CheckboxProps = {
  partial?: boolean
} & UICheckboxProps

function Checkbox({ partial, ...otherProps }: CheckboxProps) {
  return (
    <UICheckbox
      data-fs-checkbox
      data-fs-checkbox-partial={partial}
      {...otherProps}
    />
  )
}

export default Checkbox
