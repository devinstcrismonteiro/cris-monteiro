import styled, { css } from 'styled-components'

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${({ slider }) =>
    slider &&
    css`
      min-width: 320px;
    `}
/* 
  ${({ first }) =>
    first &&
    css`
      margin-left: 3rem;
    `} */

  .card {
    background: var(--brand_1);
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
    border-top-left-radius: 30px;
    overflow: hidden;
    position: relative;
    width: 100%;
    display: flex;
    flex-direction:column;

    .card-content {
      padding: 1.4rem;
      position: relative;
      display: flex;
      flex-direction: column;
      flex: 1;
    }

    h3 {
      font-size: 22px;
      font-weight: 600;
      margin-bottom: 0.8rem;
    }

    p {
      margin-bottom: 1rem;
      small {
        font-size: 12px;
      }
    }

    img {
      width: 100%;
    }

    button {
      width: 100%;
    }
    a {
      font-size: 18px;
    }
  }

  ${({ type }) =>
    type === 'blog' &&
    css`
      .card {
        background: var(--palette_1);
        padding-bottom: 0.8rem;

        p {
          display: none;
        }

        h3 {
          color: #e8d5db;
        }
      }

      button,
      a {
        transform: translateY(-50%);
        width: 60%;
      }
    `}
`
