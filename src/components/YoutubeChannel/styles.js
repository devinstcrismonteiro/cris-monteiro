import styled from 'styled-components'
import media from 'styled-media-query'

import * as SectionSocialsStyles from '../SectionSocials/styles'

export const Wrapper = styled.section`
  padding: ${({ moreMargin }) => (moreMargin ? '4rem 0' : '2rem 0 0')};
  background: ${({ bgWhite }) => (bgWhite ? '#fff' : '#fff5f8')};

  img {
    border-top-left-radius: 40px;
  }

  .img {
    iframe {
      min-width: 420px;
      height: 315px;
    }
  }

  ${media.lessThan('medium')`
    .img {
      width: calc(100% - 1rem);
      iframe {
        min-width: unset;
        width: 100%;
        height: 52vw;
      }
    }
    padding: 2rem 0;
  `}
  ${media.lessThan('small')`
  .img {
    iframe {
      height: 70vw;
    }
  }
  `}
`

export const TextContent = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: start;
  margin: 0 5rem 0 4rem;

  h1 {
    margin-bottom: 1.5rem;
  }

  h4 {
    font-size: 38px !important;
    margin-top: 1.5rem;
    color: var(--brand_2);
    font-weight: 700;
  }

  ${SectionSocialsStyles.Wrapper} {
    margin-top: 1.5rem;
    p {
      color: var(--palette_1);
    }
  }
`
