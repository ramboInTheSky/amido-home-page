import styled from 'styled-components'
import theme from '../../theme'

export const PagesContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: Page-around;
  padding: 1rem;
`
interface PageLinkProps {
  columns: number
}
export const PageLink = styled.a<PageLinkProps>`
  flex-basis: ${props => `${Math.round(100 / props.columns)}%`};
  text-align: center;
  padding: 1rem;
  padding-bottom: 2rem;
  font-size: 20px;
  text-decoration: none;
  color: ${theme.darkestColor}
`
