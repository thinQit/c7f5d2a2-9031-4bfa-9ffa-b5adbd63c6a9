'use client'

import React from 'react'
import { AlertTriangle, RefreshCw } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface ErrorBoundaryProps {
  children?: React.ReactNode
  title?: string
  message?: string
}

interface ErrorBoundaryState {
  hasError: boolean
}

export default class ErrorBoundary extends React.Component<Partial<ErrorBoundaryProps>, ErrorBoundaryState> {
  constructor(props: Partial<ErrorBoundaryProps>) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true }
  }

  componentDidCatch(error: Error) {
    console.error('Homepage error captured by ErrorBoundary:', error)
  }

  handleReload = () => {
    window.location.reload()
  }

  render() {
    const { children, title = 'Oops! Something went wrong.', message = 'We hit a temporary issue loading this page. Please refresh to continue browsing Italo Pizza.' } = this.props

    if (this.state.hasError) {
      return (
        <div className="flex min-h-[60vh] items-center justify-center px-4 py-16">
          <div className="w-full max-w-md rounded-2xl border bg-white p-6 text-center shadow-sm">
            <AlertTriangle className="mx-auto mb-3 h-8 w-8 text-[#E63946]" />
            <h2 className="mb-2 text-xl font-bold text-[#1A1A2E]">{title}</h2>
            <p className="mb-5 text-sm text-muted-foreground">{message}</p>
            <Button onClick={this.handleReload} className="bg-[#4f46e5] hover:bg-[#4338ca]">
              <RefreshCw className="mr-2 h-4 w-4" />
              Reload Page
            </Button>
          </div>
        </div>
      )
    }

    return children
  }
}
