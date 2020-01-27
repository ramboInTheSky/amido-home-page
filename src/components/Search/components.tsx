import styled from 'styled-components'
import theme from '../../theme'

export const SeachContainer = styled.div`
  height: 2rem;
  margin: auto;
`

export const SearchGrid = styled.div`
  display: grid !important;
  grid-template-columns: 1fr 1fr 1fr;
  background-color: ${theme.amidoColor};
  & > div{
      display: flex;
      justify-content: center;
  }
`
