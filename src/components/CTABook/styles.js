import styled from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.section`
  background: ${({ bgGrey }) => (bgGrey ? '#e1e2dd' : '#fbf2f5')};
  .line {
    height: 55px;
    background: var(--primary_light);
  }

  h3 {
    color: var(--primary_dark);
    margin-top: 1.5rem;
    font-size: 50px;
    font-weight: 900;
  }

  .book-cta {
    display: grid;
    grid-template-columns: 1fr 2fr;
    padding: 4rem 0;
    grid-gap: 2rem;
    align-items: center;

    &-text {
      p {
        font-size: 22px;
        margin: 1.5rem 0;
      }
    }
  }

  .cta-book {
    display: grid;
    grid-template-columns: 2fr 1.4fr;
    padding: 4rem 0;
    grid-gap: 6rem;
    align-items: center;

    &-text {
      p {
        font-size: 22px;
        margin: 1.5rem 0;
      }
    }

    ${media.lessThan('medium')`
      padding: 2rem 0;
      grid-gap: 2rem;
    `}
  }

  ${media.lessThan('medium')`
    .book-cta, .cta-book {
      grid-template-columns: 1fr;
      justify-content:center;
      text-align: center;

      .book-img {
        width: 70%;
        margin: 0 auto;
      }

      button {
        width: 90%;
        margin: 0 auto;
      }
    }
    .line {
      display: none;
    }
  `}
`
