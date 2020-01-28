import FormGroup from '@material-ui/core/FormGroup'
import TextField from '@material-ui/core/TextField'
import styled from 'styled-components'
import theme from '../../theme'

export const SeachContainer = styled.div`
  height: 2rem;
  margin: auto;
`

export const SearchGrid = styled.div`
  display: grid !important;
  grid-template-columns: 1fr 1fr;
  background-color: ${theme.amidoColor};
  flex-wrap: nowrap !important;
  & > div{
      display: flex;
      justify-content: center;
      flex-wrap: nowrap !important;
  }
`

export const InputField = styled(TextField)`
  width: 22rem;
  @media (max-width: 1000px) {
    width: auto;
  }
`

export const ToggleGroup = styled(FormGroup)`
  flex-wrap: nowrap !important;
`
