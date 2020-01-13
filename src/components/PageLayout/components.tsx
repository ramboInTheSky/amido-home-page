import styled from 'styled-components'
import theme from '../../theme'

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const Content = styled.section`
  padding: 0 calc(${theme.gutter} * 3) calc(${theme.gutter} * 3) calc(${theme.gutter} * 3) ;
`
