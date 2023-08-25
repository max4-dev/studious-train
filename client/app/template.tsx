'use client'

import { withHydrate } from 'effector-next'
import { AppProps } from 'next/app';
import { FC, useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import './globals.css'

const enhance = withHydrate();

function RootTemplate({
  children,
}: {
  children: React.ReactNode
}) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, [])

  return (
    mounted && (
      <>
        {children}
        <ToastContainer
          position="bottom-right"
          hideProgressBar={false}
          closeOnClick
          rtl={false}
          limit={1}
          theme="light"
        />
      </>
    )
  )
}

export default RootTemplate
