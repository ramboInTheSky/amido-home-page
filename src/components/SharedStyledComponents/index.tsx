import Card from '@material-ui/core/Card'
import styled from 'styled-components'
import theme from '../../theme'

export const Box = styled(Card)`
  width: 100%;
  background-color: #ececec !important;
  margin-right: ${theme.gutter};
  border-radius: ${theme.borderRadius} !important;
  -webkit-box-shadow: 5px 5px 16px -5px rgba(0,0,0,0.75) !important;
-moz-box-shadow: 5px 5px 16px -5px rgba(0,0,0,0.75) !important;
box-shadow: 5px 5px 16px -5px rgba(0,0,0,0.75) !important;
  & > div:first-of-type {
    padding-top: ${theme.gutter};
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-bottom: 1.2rem;
  }
`
