import styled from 'styled-components'
import theme from '../../theme'

export const Header = styled.div`
  background-color: #fff;
  border-bottom: 1px solid ${theme.separator};
  font-size: 1.2rem;
  /* font-weight: bold; */
  opacity: 0.9;
  color: ${theme.darkestColor};
`

export const Icon = styled.img`
  width: 6.25rem;
  height: 6.25rem;
`

export const AppsList = styled.div`
  padding: ${theme.gutter};
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`

export const App = styled.div`
  margin-bottom: 0.5rem;
`
