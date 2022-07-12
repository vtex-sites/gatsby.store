import { useSession } from '@faststore/sdk'
import { useRef, useState } from 'react'
import InputText from 'src/components/ui/InputText'
import { validateSession } from 'src/sdk/session/validate'

interface Props {
  closeModal: () => void
}

function RegionInput({ closeModal }: Props) {
  const inputRef = useRef<HTMLInputElement>(null)
  const { setSession, isValidating, ...session } = useSession()
  const [errorMessage, setErrorMessage] = useState<string>('')
  const [input, setInput] = useState<string>('')

  const handleSubmit = async () => {
    const value = inputRef.current?.value

    if (typeof value !== 'string') {
      return
    }

    setErrorMessage('')

    try {
      const newSession = await validateSession({
        ...session,
        postalCode: value,
      })

      if (newSession) {
        setSession(newSession)
      }

      closeModal()
    } catch (error) {
      setErrorMessage('You entered an invalid Zip Code')
    }
  }

  return (
    <div className="regionalization-input">
      <InputText
        inputRef={inputRef}
        id="postal-code-input"
        error={errorMessage}
        label="Zip Code"
        actionable
        value={input}
        onInput={(e) => {
          errorMessage !== '' && setErrorMessage('')
          setInput(e.currentTarget.value)
        }}
        onSubmit={handleSubmit}
        onClear={() => setInput('')}
      />
    </div>
  )
}

export default RegionInput
