import React from 'react'
import { AnimatedLogo, HeaderWrapper, Title } from './components'
import theme from '../../theme'

type HeaderProps = {
  account: any
}

const Header = (props: HeaderProps) => {
  return (
    <HeaderWrapper>
      <AnimatedLogo
        initial={{ scale: 0}}
        animate={{ rotate: 360, scale: 1 }}
        transition={{
          type: 'spring',
          stiffness: 260,
          damping: 20,
        }}
      />
<Title> Hey <span style={{color:theme.amidoColor, fontFamily: 'inherit'}}>{props.account?.name?.split(' ')[0]}</span> We thought you might find this useful yo! </Title>
    </HeaderWrapper>
  )
}

export default Header
