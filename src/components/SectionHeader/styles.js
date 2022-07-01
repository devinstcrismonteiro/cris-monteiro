import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Grid = styled.div`
  ${({ leftColumn, rightColumn }) => css`
    display: grid;
    grid-template-columns: ${leftColumn}fr ${rightColumn}fr;
    grid-gap: 20px;
    align-items: center;
    justify-items:center;
  `}

  ${({ secondary }) =>
    secondary &&
    css`
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    `}

  p {
    font-size: 20px;
  }

  h3 {
    font-size: 32px;
  }

  h4 {
    font-size: 26px;
  }

  ${media.lessThan('medium')`
    grid-template-columns: 1fr;
    text-align: center;
  `}
`
