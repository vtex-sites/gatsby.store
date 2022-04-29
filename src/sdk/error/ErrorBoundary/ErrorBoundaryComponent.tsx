import type { ReactNode } from 'react'
import { Component } from 'react'

interface State {
  hasError: boolean
  error: null | unknown
}

interface Props {
  fallback: NonNullable<ReactNode> | null
}

class ErrorBoundaryComonent extends Component<Props, State> {
  public state = { hasError: false, error: null }
  public static getDerivedStateFromError(error: unknown) {
    return {
      hasError: true,
      error,
    }
  }

  public render() {
    if (this.state.hasError) {
      return this.props.fallback
    }

    return this.props.children
  }
}

export default ErrorBoundaryComonent
