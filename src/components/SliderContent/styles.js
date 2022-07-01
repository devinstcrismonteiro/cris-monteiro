import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import Card from '../Cards'

export const Slider = styled.div`
  margin-top: 2rem;

  .slider {
    display: flex;
    gap: 3rem;
    overflow-x: auto;

    .card {
      max-width: 400px;
      flex: 1;
    }
  }

  ${media.greaterThan('2260px')`
    .slider {
      justify-content: center;
    }
  `}

  ${media.greaterThan('medium')`
    .slider {  
      &::-webkit-scrollbar-track {
        background: #ecf0f1; 
      }
      
      &::-webkit-scrollbar-thumb {
        background: #95a5a6; 
      }
  
      &::-webkit-scrollbar-thumb:hover {
        background: #7f8c8d; 
      }
    }
  `}

  ${media.lessThan('medium')`
    .slider {
      gap: 1.5rem;
    }
    
    margin-top: 0;
    padding: 2rem 0 !important;
  `}
`

export const Wrapper = styled.section`
  padding: 4rem 0;
  background: ${({ secondary }) => (secondary ? '#fff' : '#f0e8eb')};

  ${media.lessThan('medium')`
    padding: 2rem 0 0!important;
  `}

  .see-all {
    margin-top: 2rem;
    justify-content: flex-start;

    ${media.lessThan('medium')`
      margin-top: 0;
      padding-bottom: 2rem;
    `}
  }

  ${({ secondary }) =>
    secondary &&
    css`
      padding-bottom: 0;

      ${Slider} {
        margin-top: 4rem;
        padding: 4rem 0;
        background: #fff6f9;
      }
    `}

  ${media.lessThan('medium')`
      padding: 2rem 0;  
  `}

  ${({ courses }) =>
    courses &&
    css`
      ${media.greaterThan('large')`
        background-image: url(https://wp.institutocrismonteiro.com.br/wp-content/uploads/2022/03/cris-topo-564x1024.png);
        background-repeat: no-repeat;
        background-position: top right;
      `}
    `}
`

export const TitleContent = styled.div`
  a {
    justify-content: left;
  }
  h1 {
    margin-bottom: 0.5rem;
  }

  ${media.lessThan('medium')`
    width: 100%;
    text-align: center;
  `}
`

export const TextContent = styled.p`
  width: 65%;

  ${({ blog }) =>
    blog &&
    css`
      width: 100%;
    `}

  ${media.lessThan('medium')`
    width: 100%;
  `}
`
