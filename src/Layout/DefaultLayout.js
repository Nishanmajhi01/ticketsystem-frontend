import React from 'react'
import { Header } from './partials/Header.compo'
import { Footer } from './partials/Footer.compo'

export const DefaultLayout = ({children}) => {
  return (
    <div>
      <div className="default-layout">
        <header className="header"><Header/></header>
        <main className="main">{children}</main>
        <footer className="footer"> <Footer/></footer>
      </div>
    </div>
  )
}


