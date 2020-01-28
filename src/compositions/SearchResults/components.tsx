import AnimateHeight from 'react-animate-height'
import styled from 'styled-components'

export const SearchResultsComponent = styled(AnimateHeight)`
  min-height: 1px;
  overflow-y: auto !important;
  overflow-x: hidden !important;
  margin-top: -1px;
`

export const List = styled.ul`
  list-style-type: none;
  padding-right: 2rem;
  & li {
    margin-bottom: 2rem;
    padding-left: 1rem;
    margin-bottom: 0.5rem;
    padding: 1rem; 
    /* background-color: #fecb074d; */
    border: 1px solid #fecb07;
    border-radius: 5px;
  }
`
