import { forwardRef } from 'react'
import type { HTMLAttributes } from 'react'
import Icon from 'src/components/ui/Icon'

export interface ToggleProps
  extends HTMLAttributes<Omit<HTMLInputElement, 'disabled'>> {
  label?: string
  disabled?: boolean
  variant?: 'horizontal' | 'vertical'
}

const Toggle = forwardRef<HTMLInputElement, ToggleProps>(function Toggle(
  { label, disabled, variant = 'horizontal', ...otherProps }: ToggleProps,
  ref
) {
  return (
    <div data-fs-toggle data-fs-toggle-variant={variant}>
      <div data-fs-toggle-container>
        <input
          ref={ref}
          id="toggle"
          name="toggle"
          type="checkbox"
          disabled={disabled}
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
      <label htmlFor="toggle">{label}</label>
    </div>
  )
})

export default Toggle
