import styled from 'styled-components'
import media from 'styled-media-query'

import { Card } from '../Cards'

export const Wrapper = styled.section`
  padding: 4rem 0 3rem;

  ${media.lessThan('medium')`
    padding: 2rem 0;
  `}
`

export const TextContentLeft = styled.div`
  h1 {
    margin: 1rem 0;

    ${media.lessThan('medium')`
      margin-bottom: 0;
    `}
  }
  a {
    justify-content: flex-start;
  }
`

export const CardsSection = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 5rem;
  margin: 4rem 0 0;

  ${media.lessThan('medium')`
    grid-template-columns: 1fr;
    grid-gap: 2rem;
    margin: 2rem auto 0;
    width: 90%;
  `}

  ${Card} {
    .card {
      max-width: 380px;

      a {
        margin-top: 1.4rem;
      }
    }
  }
`
