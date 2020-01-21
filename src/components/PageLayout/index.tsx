import React from 'react'
import Header from '../Header'
import { Content, Hero, PageContent, PageWrapper } from './components'
type LayoutProps = {
  children: React.ComponentElement<any, any>
}

const Layout = ({ children }: LayoutProps) => {
  return (
      <PageWrapper className="mainContainer">
        <Hero />
        <PageWrapper className="innerContainer">
          <PageContent>
            <Header />
            <Content>{children}</Content>
          </PageContent>
        </PageWrapper>
      </PageWrapper>
  )
}

export default Layout
