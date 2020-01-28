import { createMuiTheme } from '@material-ui/core/styles'
import styled from 'styled-components'
import amido from './theme'


export const amidoTheme = createMuiTheme({
  palette: {
    primary: { main: amido.darkestColor },
    secondary: {
      main: amido.darkestColor,
    },
  },
})

export const MainWrapper = styled.div`
  height: 100%;
  background: ${amido.darkestColor};
  color: #fff;
  margin: 0;
`
