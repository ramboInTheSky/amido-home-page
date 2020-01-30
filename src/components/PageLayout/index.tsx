import React from 'react'
import Header from '../Header'
import { Content, Hero, PageContent, PageWrapper } from './components'
type LayoutProps = {
  children: React.ComponentElement<any, any>
  account: any
}

const Layout = ({ children, account }: LayoutProps) => {
  return (
    <PageWrapper className="mainContainer">
      <Hero />
      <PageWrapper className="innerContainer">
        <PageContent>
          <Header account={account} />
          <Content>{children}</Content>
        </PageContent>
      </PageWrapper>
    </PageWrapper>
  )
}

export default Layout
