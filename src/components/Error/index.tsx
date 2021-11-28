import React from 'react'

type TProps = {
  name: string
}
type TState =  {
  hasError: boolean
}

class Component extends React.Component<TProps, TState> {
  public state = {
    hasError: false
  }

  public static getDerivedStateFromError(_: Error) {
    return { hasError: true }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    
  }

  render() {
    if (this.state.hasError) {
      return null
    }

    return this.props.children
  }
}

export default Component
