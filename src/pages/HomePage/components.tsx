import styled from 'styled-components'

export const HomePageWrapper = styled.div`
  display: grid;
  grid-template-columns: 6fr 2fr;
  align-items: flex-start;
  grid-gap: 1rem;
  @media (max-width: 1200px) {
    grid-template-columns: 1fr;
  }
`

export const Col = styled.div`
  display: flex;
  flex-direction: column;
  & > div{
    margin-bottom: 1rem;;
  }
`

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  & > div{
    margin-right: 1rem;
  }
`

export const Intro = styled.p`
  text-align: center;
  width: 100%;
`