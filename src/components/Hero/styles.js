import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import { Wrapper as ChannelWrapper, IconsSection } from '../ChannelNews/styles'

export const Grid = styled.div`
  ${({ leftColumn, rightColumn, gap }) => css`
    display: grid;
    grid-template-columns: ${leftColumn}fr ${rightColumn}fr;

    ${gap &&
    css`
      grid-gap: ${gap + 'rem'};
    `}
  `}

  ${media.lessThan('medium')`
    grid-template-columns: 1fr;
  `}
`
export const HeroDesc = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;

  .text {
    background: var(--primary);
    padding: 2rem 0;

    p {
      width: 50%;
      color: #fff;
      font-size: 20px;
    }
  }

  .cta {
    background: var(--primary_light);
    padding: 1.5rem 0;

    h3,
    a {
      font-size: 26px;
    }
    a:hover {
      color: #fff;
    }
  }

  ${media.lessThan('medium')`
    position: relative;
    margin-top: -2rem;
    z-index: 15;
    text-align:center;

    .text {
      padding: 1rem 0;
      
      p {
        width: 100%;
        font-size:16px;
        line-height: 1.4;
      }
    }
  `}
`

export const TextHero = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 2rem;

  ${({ mb }) =>
    mb &&
    css`
      margin-bottom: ${mb + 'rem'};
    `}

  h1 {
    margin-bottom: 2rem;
  }

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }

  p {
    font-size: 18px;
    line-height: 1.2;
  }

  button,
  a {
    margin-right: auto;
    width: auto;
    margin-top: 2rem;
    font-size: 18px;
  }

  ${media.lessThan('medium')`
    text-align: center;

    h1 {
      margin-bottom: 0.8rem;
    }
  `}
`

export const ImgHero = styled.div`
  z-index: 10;
  position: relative;
  align-self: end;
`

export const Wrapper = styled.section`
  background: #e1e2dd;
  padding-top: 2rem;

  ${media.lessThan('medium')`
    position: relative;

    ${TextHero} {
      button {
        position: absolute;
        bottom: 5%;
        z-index: 15;
        width: 90%;
      }
      a {
        margin: 2rem auto 0;
      }
    }

    ${ImgHero} {
      margin-top: 2rem;
    }
  `}
`

export const Wrapper2 = styled.section`
  margin-top: 2rem;
  background: '#fff';
  position: relative;

  ${TextHero} {
    justify-content: start;
    margin-top: 2rem;

    ${media.lessThan('medium')`
      margin-top: 0;
      margin-bottom: 0;
    `}
  }
  ${Grid} {
    grid-gap: 4rem;
  }

  img {
    border-top-left-radius: 35px;
    border-bottom-right-radius: 35px;
  }

  ${media.lessThan('medium')`
    margin-top: 0;

    ${Grid} {
      grid-gap: 1.2rem;
      grid-template-columns: 1fr;
    }
  `}
`

export const Wrapper3 = styled.section`
  margin-top: 2rem;
  background: '#fff';
  position: relative;

  ${TextHero} {
    justify-content: center;

    a {
      justify-content: flex-start;
      margin-bottom: 2rem;
    }

    ${media.lessThan('medium')`
      a { 
        justify-content: center;
      }
      button {
        margin: 2rem auto 0;
      }
    `}
  }

  ${Grid} {
    grid-gap: 6rem;
  }

  img {
    border-bottom-right-radius: 26px;
    border-top-left-radius: 26px;
  }
`

export const Wrapper4 = styled.section`
  margin-top: 2rem;
  background: '#fff';
  position: relative;

  ${TextHero} {
    justify-content: start;
    margin-top: 2rem;
  }

  ${Grid} {
    grid-gap: 4rem;
  }

  .cta {
    display: flex;
    background: #af848e;

    ${ChannelWrapper} {
      padding: 0;
      h1 {
        display: none;
      }

      svg {
        max-height: 35px;
      }
    }

    ${IconsSection} {
      justify-content: space-around;
    }
  }

  .text {
    background: var(--primary_light);
  }

  img {
    border-top-left-radius: 35px;
  }
`
