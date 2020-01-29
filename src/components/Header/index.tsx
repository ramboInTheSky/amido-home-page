import React from 'react'
import { HeaderWrapper, Logo, Title } from './components'

type HeaderProps = {}

const Header = (props: HeaderProps) => {
  return (
    <HeaderWrapper>
      <Logo />
      <Title> We thought you might find this useful yo! </Title>
    </HeaderWrapper>
  )
}

export default Header
