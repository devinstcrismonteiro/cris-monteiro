import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Button = styled.button`
  background: var(--primary);
  border: none;
  color: #fff;
  font-size: 16px;
  border-radius: 25px;
  padding: 0.5rem 1.2rem;
  box-shadow: 0px 3.48863px 6.97726px rgba(0, 0, 0, 0.2);
  font-weight: 600;
  min-height: 50px;
  min-width: 200px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: var(--primary_dark);
  }

  ${({ soon }) =>
    soon &&
    css`
      background-color: #0093E9;
      background-image: linear-gradient(160deg, #0093E9 0%, #80D0C7 100%);

      &:hover {
        background-image: linear-gradient(160deg, #0093E9 0%, #80D0C7 100%);
      }
    `
  }

  ${({ pulse }) =>
    pulse &&
    css`
      background-color: #075e54;
      background: linear-gradient(270deg, #25d366, #128c7e, #075e54);
      background-size: 600% 600%;

      animation: whatsappbg 2s ease infinite, pulse 2s infinite;

      @keyframes pulse {
        0% {
          box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.7);
        }
      
        70% {
          box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
        }
      
        100% {
          box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
        }
      }

      @keyframes whatsappbg {
        0%{background-position:0% 50%}
        50%{background-position:100% 50%}
        100%{background-position:0% 50%}
      }
    `
  }

  ${({ link }) =>
    link &&
    css`
      background: none;
      box-shadow: none;
      color: var(--primary);
      font-size: 32px;
      padding: 0;
      text-align: left;
      min-width: unset;

      &:hover {
        background: none;
        color: var(--primary_light);

        svg {
          color: var(--primary_light);
        }
      }

      ${media.lessThan('medium')`
        font-size: 24px;
      `}
    `}
`

export const Container = styled.div`
  width: 1220px;
  margin: 0 auto;
  padding: 0 15px;
  ${({ fluid }) => fluid && 'padding:0;'}
  ${media.lessThan('large')`
    max-width: 1000px;
    width: auto;
    padding: 0 1rem;
    &.only-wide {
      width: 100%;
    }
  `}
  ${media.lessThan('medium')`
    width: 100%;
  `}
`

export const Input = styled.input`
  width: 100%;
  border: 0;
  border-bottom: 2px solid var(--palette_4);
  height: 45px;
  font-size: 18px;
  color: var(--primary);

  &:active,
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: var(--palette_4);
  }
`
