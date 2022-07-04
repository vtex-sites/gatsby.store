import type { ChangeEvent } from 'react'
import { useCallback, useState } from 'react'
import { Form, Label, Input, LoadingButton } from '@faststore/ui'
import { useNewsletter } from 'src/sdk/newsletter/useNewsletter'

export function NewsletterForm() {
  const { addUser, loading } = useNewsletter()

  const [email, setEmail] = useState('')
  const [name, setName] = useState('')

  const onSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      addUser({ name, email })
    },
    [addUser, name, email]
  )

  return (
    <Form onSubmit={onSubmit}>
      <h1>Newsletter</h1>
      <div>
        <Label htmlFor="name">Name:</Label>
        <Input
          id="name"
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setName(e.target.value)
          }
          placeholder="Enter your name"
          required
        />
      </div>
      <div>
        <Label htmlFor="email">Email:</Label>
        <Input
          id="email"
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
          placeholder="Enter your email"
          required
        />
      </div>
      <LoadingButton type="submit" loading={loading}>
        Subscribe
      </LoadingButton>
    </Form>
  )
}
