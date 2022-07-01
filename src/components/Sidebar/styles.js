import styled from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;

  .cris-cta {
    font-size: 20px;

    h4 {
      font-size: 28px;
      margin-top: 1.2rem;
    }
    p {
      margin: 1.2rem 0;
    }
  }

  form {
    background: #f0e8eb;
    padding: 2rem;
    font-size: 20px;
    text-align: center;

    p {
      margin-bottom: 2rem;
    }

    input {
      width: 100%;
      height: 55px;
      border: 0;
      margin-bottom: 1rem;
      border-radius: 7px;
      padding: 0 1.5rem;
    }
    button {
      width: 70%;
      margin: 1rem auto 0.4rem;
      font-size: 12px;
      border-radius: 0;
      min-height: unset;
      padding: 0.8rem 0;
    }
    small {
      font-size: 11px;
      color: var(--palette_2);
    }
  }

  .featured-posts {
      h4 {
          font-size: 26px;
          margin-bottom: 1.4rem;
      }
      li {
          font-size: 18px;
          margin-bottom: 1.4rem;
      }

      ${media.lessThan('medium')`
        margin-bottom: 2rem;
      `}
  }
`
