import styled from 'styled-components'
import theme from '../../theme'

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  height: 3rem;
  padding: 1rem;
  /* background-color: ${theme.darkestColor};
  opacity: 0.9;
  z-index: 200;
  position: fixed;
  top: 0;
  right: 0;
  left: 0; */
`

export const Logo = styled.div`
  background-image: url('https://amido.com/app/themes/e3creative/dist/images/logo-brand.svg');
  background-size: 100px;
  width: 8rem;
  background-repeat: no-repeat;
`

export const Title = styled.h1`
  font-size: 2rem;
  margin-top: 5px;
`
