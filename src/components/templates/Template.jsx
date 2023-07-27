import React from 'react'
import Header from './Header/Header'
import { Outlet } from 'react-router-dom'
import { Footer } from './Footer/Footer'

export const Template = () => {
  return (
    <>
        <Header />
        <main>
          <Outlet/>
        </main>
        <Footer />
    </>
  )
}

