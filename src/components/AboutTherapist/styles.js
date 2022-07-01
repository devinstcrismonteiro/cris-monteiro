import styled from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.section`
  margin-top: -1.5rem;

  .about {
    background: #fff6f9;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 4rem;
    align-items: center;
    padding: 5rem 0;

    ${media.lessThan('medium')`
      grid-template-columns: 1fr;
    `}

    h1 {
      margin-bottom: 1.5rem;
    }

    p {
      font-size: 20px;
    }
  }

  .content {
    display: flex;
    flex-direction: column;
    margin-top: 4rem;
    gap: 10px;
    
    p {
      font-size: 19px;
    }
  }
`
