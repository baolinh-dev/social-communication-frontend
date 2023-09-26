import React, { ReactNode } from 'react'
import Header from 'components/Header'
import Footer from 'components/Footer'

interface DefaultLayoutProps {
  children: ReactNode
}

function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default DefaultLayout
