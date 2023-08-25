import AuthPage from '@/components/templates/AuthPage/AuthPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Auth',
}

export default function Auth() {
  return (
    <>
      <AuthPage />
    </>
  )
}
