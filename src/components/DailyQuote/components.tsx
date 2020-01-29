import styled from 'styled-components'
import theme from '../../theme'
import { Box } from '../Styled'

export const Quote = styled(Box)`
    background-color: ${theme.darkestColor} !important;
    color: #fff !important;
    padding: 1rem;
    border: 5px dashed ${theme.amidoColor};
    & > p:first-child{
        font-style: italic;
        font-size: 14px;
        text-align: center;
    }
    & > p:last-child{
        font-size: 12px;
        text-align: right;
    }
`