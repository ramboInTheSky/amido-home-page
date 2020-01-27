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

export const App = styled.a`
  margin-bottom: ${theme.minimumPadding};
  margin-left: 3px;
  display: flex;
  flex-direction: column;
  text-align: center;
  text-decoration: none;
  border: 1px solid ${theme.separator};
  padding: ${theme.minimumPadding};
  border-radius: ${theme.borderRadius};
  -webkit-box-shadow: 0px 5px 16px -5px rgba(0, 0, 0, 0.75) !important;
  -moz-box-shadow: 0px 5px 16px -5px rgba(0, 0, 0, 0.75) !important;
  box-shadow: 0px 5px 16px -5px rgba(0, 0, 0, 0.75) !important;
  color: ${theme.darkestColor};
`
