import styled from 'styled-components'
import theme from '../../theme'
import { Box } from '../Styled'

export const Quote = styled(Box)`
    background-color: ${theme.darkestColor} !important;
    color: #fff !important;
    padding: 1rem;
    font-size: 13px;
    border: 5px dashed ${theme.amidoColor};
`