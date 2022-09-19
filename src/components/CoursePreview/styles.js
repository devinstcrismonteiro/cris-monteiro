import styled from 'styled-components'
import media from 'styled-media-query'

import { Card } from '../Cards'

export const Wrapper = styled.section`
  padding: 4rem 0 3rem;

  ${media.lessThan('medium')`
    padding: 2rem 0;
  `}

  .video {
    margin: 2rem auto 0;

    a, .video__cta {
      margin: 2rem auto 1rem;
      width: max-content;
    }

    video, iframe {
      width: 100%;
      height: auto;
      aspect-ratio: 16 / 9;
    }
  }
`

export const TextContentLeft = styled.div`
  h1 {
    line-height: 1.2;
  }
  a {
    justify-content: flex-start;
  }
`
