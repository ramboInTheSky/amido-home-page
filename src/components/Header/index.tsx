import React from 'react'
import { HeaderWrapper, Logo, Title } from './components'

type HeaderProps = {}

const Header = (props: HeaderProps) => {
  return (
    <HeaderWrapper>
      <Logo />
      <Title> Yo! Here what's been happening lately... </Title>
    </HeaderWrapper>
  )
}

export default Header
