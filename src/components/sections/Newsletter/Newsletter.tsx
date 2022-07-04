import type { ComponentPropsWithRef, FormEvent, ReactNode } from 'react'
import { forwardRef, useRef } from 'react'
import { Form, Label, Input, LoadingButton } from '@faststore/ui'
import { useNewsletter } from 'src/sdk/newsletter/useNewsletter'

export interface NewsletterProps
  extends Omit<ComponentPropsWithRef<'form'>, 'title' | 'onSubmit'> {
  /**
   * Title for the section.
   */
  title: ReactNode
  /**
   * A subtitle for the section.
   */
  subtitle?: ReactNode
}

const Newsletter = forwardRef<HTMLFormElement, NewsletterProps>(
  function Newsletter({ title, subtitle, ...otherProps }, ref) {
    const { addUser, loading } = useNewsletter()

    const nameInputRef = useRef<HTMLInputElement>(null)
    const emailInputRef = useRef<HTMLInputElement>(null)

    const handleSubmit = (event: FormEvent) => {
      event.preventDefault()

      addUser({
        name: nameInputRef.current?.value ?? '',
        email: emailInputRef.current?.value ?? '',
      })
    }

    return (
      <section data-store-newsletter>
        <Form
          data-newsletter-form
          ref={ref}
          onSubmit={handleSubmit}
          {...otherProps}
        >
          <div data-newsletter-header>
            {title}
            {Boolean(subtitle) && subtitle}
          </div>

          <div data-newsletter-controls>
            <Label htmlFor="newsletter-name">Your name</Label>
            <Input
              id="newsletter-name"
              type="text"
              name="newsletter-name"
              ref={nameInputRef}
              required
            />
            <Label htmlFor="newsletter-email">Your email</Label>
            <Input
              id="newsletter-email"
              type="email"
              name="newsletter-email"
              ref={emailInputRef}
              required
            />
            <LoadingButton type="submit" loading={loading}>
              Subscribe
            </LoadingButton>
          </div>
        </Form>
      </section>
    )
  }
)

export default Newsletter
