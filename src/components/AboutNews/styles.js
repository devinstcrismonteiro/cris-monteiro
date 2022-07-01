import styled from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.section`
  padding: 4rem 0 3rem;
`

export const TextContentLeft = styled.div`
  h1 {
    margin: 1rem 0;
  }
`

export const CardsSection = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 5rem;
  margin: 2rem 0 0;

  ${media.lessThan('medium')`
    grid-template-columns: 1fr;
  `}
`
