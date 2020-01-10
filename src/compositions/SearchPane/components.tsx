import Card from '@material-ui/core/Card'
import styled from 'styled-components'

export const Box = styled(Card)`
  -webkit-box-shadow: 2px 2px 19px -9px rgba(0, 0, 0, 0.84);
  -moz-box-shadow: 2px 2px 19px -9px rgba(0, 0, 0, 0.84);
  box-shadow: 2px 2px 19px -9px rgba(0, 0, 0, 0.84);
  & > div:first-of-type {
    padding-top: 1rem;
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding-bottom: 2rem;
  }
`
