import styled from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.section`
  .page-title {
    margin: 2rem 0 5rem;
    font-size: 32px;

    ${media.lessThan('medium')`
      margin-bottom: 2rem;
    `}
  }
`

export const Content = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-gap: 7rem;

  .sidebar {
    background: cyan;
  }

  article {
    margin-bottom: 5rem;

    img:hover {
      opacity: 0.8;
    }

    h1 {
      margin-top: 2rem;
      font-size: 42px;
      font-weight: 500;

      &:hover {
        opacity: 0.8;
      }
    }
    p {
      font-size: 20px;
      margin: 1rem 0;
      font-weight: 400;
    }
    a {
      font-size: 20px;
    }
    .post-details {
      p {
        color: #c4c4c4;
        font-weight: 100;
      }
      span {
        color: var(--primary);
      }
    }
  }

  ${media.lessThan('medium')`
    grid-template-columns: 1fr;
    grid-gap: 0;

    article {
      h1 {
        font-size: 28px;
        margin-top: 1rem;
      }
    }
  `}
`
