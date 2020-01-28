import styled from 'styled-components'
import theme from '../../theme'

export const SpacesContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 1rem;
`
interface SpaceLinkProps {
  columns: number
}
export const SpaceLink = styled.a<SpaceLinkProps>`
  flex-basis: ${props => `${Math.round(85 / props.columns)}%`};
  text-align: center;
  padding: 1rem;
  padding-bottom: 2rem;
  font-size: 20px;
  white-space:nowrap;
  text-decoration: none;
  color: ${theme.darkestColor};
  @media (max-width: 1200px) {
    padding-bottom: 1rem;
  }
  
`
