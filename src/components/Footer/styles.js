import styled from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  background: var(--primary);
  padding-top: 2rem;

  nav {
    padding: 2rem 0;
    border-bottom: 1px solid var(--palette_1);
    ul,
    span {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    a {
      color: #e8d5db;
      padding: 1rem 2rem;
      font-size: 20px;
    }
    span {
      color: var(--neutrals_1);

      p {
        color: currentColor;
        font-weight: 700;
        margin-right: 1rem;
      }
    }

    ${media.lessThan('medium')`
    ul {
        flex-direction: column;

        li {
          &:not(:last-of-type) {
            margin-bottom: 1.2rem;
          }
        }
      }
    `}
  }

  .privacy {
    a {
      font-size: 14px;
      text-decoration: underline;
    }
  }

  .cop {
    background: var(--primary_light);
    color: var(--palette_1);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem 0;

    p {
      font-size: 12px;
      margin-right: 0.8rem;
    }

    img {
      max-width: 100px;
    }
  }
`

export const FooterLogo = styled.div`
  display: flex;
  justify-content: center;

  img {
    max-height: 50px;
  }
`
