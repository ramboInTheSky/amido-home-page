import React from 'react'
import Header from '../Header'
import { Content, PageWrapper } from './components'
type LayoutProps = {
  children: React.ComponentElement<any, any>
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <PageWrapper className="mainContainer">
      <Header />
      <Content>{children}</Content>
    </PageWrapper>
  )
}

export default Layout
