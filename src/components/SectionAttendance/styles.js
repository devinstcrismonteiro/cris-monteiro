import styled from 'styled-components'
import media from 'styled-media-query'
import { Card } from '../Cards/styles'

export const Wrapper = styled.section`
  padding: 4rem 0;
  background: ${({ bgWhite }) => (bgWhite ? '#fff' : '#FFF5F8')};

  ${media.lessThan('medium')`
    padding: 2rem 0;
    text-align:center;
  `}

  .grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 5rem;
    align-items: center;

    ${media.lessThan('1220px')`
      grid-template-columns: 1fr 1fr;
      grid-gap: 2rem;
    `}

    .text-content {
      ${media.lessThan('1220px')`
        text-align:center;
        grid-column: 1/3;
      `}

      ${media.lessThan('medium')`
        grid-column: unset;
      `}

      p {
        margin: 1.4rem 0;
        font-size: 20px;

        &.attendance__cta {
          display: block;

          @media screen and (min-width: 1220px) {
            display: grid;
            grid-template-columns: 1fr 1fr;
          }
        }
      }
      button,a {
        width: max-content;
      }
      a {
        margin: 0 auto;
      }
    }

    ${media.lessThan('medium')`
      grid-template-columns: 1fr;
      grid-gap: 2rem;
    `}
  }

  ${Card} {
    background: #fff5f8;
  }
`
