import Card from '@material-ui/core/Card'
import styled from 'styled-components'

export const Box = styled(Card)`
  width: 100%;
  background-color: #ececec !important;
  & > div:first-of-type {
    padding-top: 1rem;
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding-bottom: 2rem;
  }
`
