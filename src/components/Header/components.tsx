import { motion } from 'framer-motion'
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

export const AnimatedLogo = styled(motion.div)`
  background-image: url('https://amido.com/app/themes/e3creative/dist/images/logo-brand.svg');
  background-size: 100px;
  width: 6rem;
  background-repeat: no-repeat;
  transform: rotate(180deg);
`

export const Title = styled.h1`
  font-size: 2rem;
  margin-top: 5px;
  margin-left: 2rem;
`
