import React from 'react'
import { AnimatedLogo, HeaderWrapper, Title } from './components'

type HeaderProps = {}

const Header = (props: HeaderProps) => {
  return (
    <HeaderWrapper>
      <AnimatedLogo
        initial={{ scale: 0 }}
        animate={{ rotate: 360, scale: 1 }}
        transition={{
          type: 'spring',
          stiffness: 250,
          damping: 10,
        }}
      />
      <Title> We thought you might find this useful yo! </Title>
    </HeaderWrapper>
  )
}

export default Header
