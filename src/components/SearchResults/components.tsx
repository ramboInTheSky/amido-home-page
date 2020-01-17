import AnimateHeight from 'react-animate-height'
import styled from 'styled-components'

export const SearchResultsComponent = styled(AnimateHeight)`
  min-height: 1px;
  overflow-y: auto !important;
  overflow-x: hidden !important;
`

export const List = styled.ul`
  list-style-type: none;
  padding-right: 2rem;
  & li {
    border-radius: 5px;
    background-color: #e0e0e0;
    margin-bottom: 0.5rem;
    padding: 1rem;
  }
`
