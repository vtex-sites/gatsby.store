import { Input as UIInput, Label as UILabel } from '@faststore/ui'
import { forwardRef } from 'react'
import type { InputHTMLAttributes } from 'react'
import Icon from 'src/components/ui/Icon'

export interface ToggleProps
  extends InputHTMLAttributes<Omit<HTMLInputElement, 'disabled' | 'type'>> {
  /**
   * ID to identify input and corresponding label.
   */
  id: string
  /**
   * The text displayed to identify the input.
   */
  label?: string
  /**
   * Specifies that this input should be disabled.
   */
  disabled?: boolean
  variant?: 'horizontal' | 'vertical'
}

const Toggle = forwardRef<HTMLInputElement, ToggleProps>(function Toggle(
  { id, label, disabled, variant = 'horizontal', ...otherProps }: ToggleProps,
  ref
) {
  return (
    <div data-fs-toggle data-fs-toggle-variant={variant}>
      <div data-fs-toggle-container>
        <UIInput
          id={id}
          ref={ref}
          role="switch"
          type="checkbox"
          disabled={disabled}
          aria-label={label ? undefined : `Toggle input with ID ${id}`}
          {...otherProps}
        />
        <span data-fs-toggle-knob>
          <Icon
            data-fs-toggle-knob-icon
            width={15}
            height={15}
            weight="bold"
            name="Checked"
          />
        </span>
      </div>
      {label && (
        <UILabel data-fs-label htmlFor={id}>
          {label}
        </UILabel>
      )}
    </div>
  )
})

export default Toggle
