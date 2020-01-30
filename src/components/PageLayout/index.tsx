import React from 'react'
import Header from '../Header'
import { Content, Hero, PageContent, PageWrapper } from './components'
type LayoutProps = {
  children: React.ComponentElement<any, any>
  account: any
  logout: Function
}

const Layout = ({ children, account, logout }: LayoutProps) => {
  return (
    <PageWrapper className="mainContainer">
      <Hero />
      <PageWrapper className="innerContainer">
        <PageContent>
          <Header account={account} logout={logout}/>
          <Content>{children}</Content>
        </PageContent>
      </PageWrapper>
    </PageWrapper>
  )
}

export default Layout
