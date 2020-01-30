import React from 'react'
import { AnimatedLogo, HeaderWrapper, LeftCol, Logout, RightCol, Title } from './components'
import theme from '../../theme'

type HeaderProps = {
  account: any
  logout: Function
}

const Header = (props: HeaderProps) => {
  return (
    <HeaderWrapper>
      <LeftCol className={'leftColHeader'}>
        <AnimatedLogo
          initial={{ scale: 0 }}
          animate={{ rotate: 360, scale: 1 }}
          transition={{
            type: 'spring',
            stiffness: 260,
            damping: 20,
          }}
        />
        <Title>
          {' '}
          Hey{' '}
          <span style={{ color: theme.amidoColor, fontFamily: 'inherit' }}>
            {props.account?.name?.split(' ')[0]}
          </span>{' '}
          We thought you might find this useful yo!{' '}
        </Title>
      </LeftCol>
      <RightCol className={'rightColHeader'}>
        <Logout onClick={props.logout as any}>Logout</Logout>
      </RightCol>
    </HeaderWrapper>
  )
}

export default Header
