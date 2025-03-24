import React from 'react'
import { Form } from './components/form'

export default function page() {
  return (
    <div className="flex min-h-screen items-center justify-center gap-2 dark:bg-gray-800">
      <p>Hello World!</p>

      <Form />
    </div>
  )
}
