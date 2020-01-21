import styled from 'styled-components'
import theme from '../../theme'

export const PageWrapper = styled.div`
  position: relative;
  z-index: 20;
`

export const PageContent = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 300;
`

export const Content = styled.section`
  padding: 0 calc(${theme.gutter} * 3) calc(${theme.gutter} * 3) calc(${theme.gutter} * 3);
`

export const Hero = styled.div`
  /* transform: translate3d(48%, calc(-28% + 0px), 0px) rotate(0deg); */
  height: 960px;
  background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI5NjAiIGhlaWdodD0iOTYwIiB2aWV3Qm94PSIwIDAgOTYwIDk2MCI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIwOTQzIDI3MCkiPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDM1MTQuNTc5IC0zMDQuNzg0KSI+PHBhdGggZD0iTTIyNC4zLDIzNy4yNzdDMjc1LjUwNiwxODYuMDcyLDI5Mi41NzMsMTY5LDM0My43NzYsMTE3LjhxNDQuODA3LDQ0LjgsODkuNjA4LDg5LjYwOGMyNS42LDI1LjYsMTAyLjQxLDI1LjYsMTI4LjAxMywwUTYwNi4yLDE2Mi42LDY1MSwxMTcuOGM0Ni45MzgsNDYuOTM4LDY4LjI3Myw2OC4yNzIsMTE5LjQ3NiwxMTkuNDc3LTI1LjYsMjUuNi01NS40NzEsNTUuNDctODUuMzQsODUuMzRDNjUxLDM1Ni43NTMsNjUxLDQyOS4yOTMsNjg1LjEzOCw0NTkuMTYyYzI1LjYsMjUuNiw1NS40NzEsNTUuNDcyLDgxLjA3NSw4MS4wNzUtNDYuOTM4LDQ2LjkzNy02OC4yNzMsNjguMjcyLTExOS40NzcsMTE5LjQ3Ny0yOS44NzEtMjkuODY4LTU1LjQ3MS01NS40NzMtODUuMzM5LTg1LjM0cy0xMDIuNDEzLTI5Ljg3LTEzMi4yODEsMC01NS40NjgsNTUuNDcyLTg1LjM0LDg1LjM0TDIyOC41NjgsNTQ0LjVjMjkuODY4LTI5Ljg3LDY4LjI3LTcyLjU0LDk4LjE0MS05OC4xNDIsMjUuNi0yNS42LDE3LjA2Ny04OS42MDgtMTIuOC0xMTkuNDc3cy01OS43NC01OS43NC04OS42MDgtODkuNjA4IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNzQxMS4xMjEgMTI1Ljk4NCkiIGZpbGw9IiNmZWNiMGEiLz48L2c+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjA5NDMgLTI3MCkiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZlY2IwYSIgc3Ryb2tlLXdpZHRoPSI2MCI+PGNpcmNsZSBjeD0iNDgwIiBjeT0iNDgwIiByPSI0ODAiIHN0cm9rZT0ibm9uZSIvPjxjaXJjbGUgY3g9IjQ4MCIgY3k9IjQ4MCIgcj0iNDUwIiBmaWxsPSJub25lIi8+PC9nPjwvZz48L3N2Zz4=');
  background-position: -200% 300%;
  background-size: 120% 120%;
  background-repeat: no-repeat;
  z-index: 2;
  position: absolute;
  top:0;
  left: 0;
  right: 0;
`
