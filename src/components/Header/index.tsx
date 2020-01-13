import React from 'react'
import { HeaderWrapper, Logo, Title } from './components'

type HeaderProps = {}

const Header = (props: HeaderProps) => {
  return (
    <HeaderWrapper>
      <Logo />
      <Title> EMPLOYEE HOME PAGE YO! </Title>
    </HeaderWrapper>
  )
}

export default Header
