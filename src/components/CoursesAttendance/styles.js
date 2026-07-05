import styled from 'styled-components'
import media from 'styled-media-query'
import { Card } from '../Cards/styles'

export const Wrapper = styled.section`
  padding: 5rem 0;
  /* mescla as cores das duas seções originais (cursos + atendimento) */
  background: linear-gradient(135deg, #fff5f8 0%, #f0e8eb 100%);
  overflow: hidden;

  ${media.lessThan('medium')`
    padding: 2.5rem 0;
    text-align: center;
  `}

  .grid {
    display: grid;
    grid-template-columns: 1fr 1.15fr;
    gap: 4.5rem;
    align-items: center;

    ${media.lessThan('large')`
      gap: 3rem;
    `}

    ${media.lessThan('medium')`
      grid-template-columns: 1fr;
      gap: 2.5rem;
    `}
  }

  .intro {
    .eyebrow {
      display: inline-block;
      text-transform: uppercase;
      letter-spacing: 2px;
      font-size: 14px;
      font-weight: 600;
      color: var(--palette_1);
      margin-bottom: 1rem;
    }

    h1 {
      margin-bottom: 1.2rem;
      line-height: 1.1;
    }

    > p {
      font-size: 20px;
      line-height: 1.5;
      max-width: 30rem;
      margin-bottom: 2rem;

      ${media.lessThan('medium')`
        max-width: 100%;
      `}
    }
  }

  .cta {
    margin-bottom: 2rem;

    a,
    button {
      width: max-content;

      ${media.lessThan('medium')`
        margin: 0 auto;
      `}
    }
  }

  .links {
    display: flex;
    flex-direction: column;
    gap: 0.9rem;

    .link {
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
      font-size: 20px;
      font-weight: 600;
      color: var(--primary);
      transition: color 0.2s ease;

      svg {
        margin-left: 0;
        width: 26px;
        color: var(--primary);
        transition: transform 0.2s ease, color 0.2s ease;
      }

      &:hover {
        color: var(--primary_light);

        svg {
          transform: translateX(5px);
          color: var(--primary_light);
        }
      }

      ${media.lessThan('medium')`
        justify-content: center;
      `}
    }
  }

  .offerings {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    align-items: stretch;

    ${media.lessThan('medium')`
      grid-template-columns: 1fr;
    `}
  }

  ${Card} {
    height: 100%;

    .card {
      height: 100%;
      background: #fff;
      box-shadow: 0 20px 40px -22px rgba(122, 74, 86, 0.4);
      transition: transform 0.25s ease, box-shadow 0.25s ease;
    }

    &:hover .card {
      transform: translateY(-6px);
      box-shadow: 0 30px 50px -22px rgba(122, 74, 86, 0.5);
    }
  }
`
