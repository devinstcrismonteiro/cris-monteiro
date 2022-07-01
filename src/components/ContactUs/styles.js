import styled from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.section`
  padding: 4rem 0;
  text-align: center;

  ${media.lessThan('medium')`
        padding: 2rem 0;
        text-align:center;
    `}

  .text-content {
    max-width: 500px;
    margin: 0 auto;
    p {
      margin: 1.5rem 0;
      font-size: 18px;
    }
    button {
        margin: 0 auto;
    }
  }

  /* form {
    input {
      margin-bottom: 0.4rem;
    }

    button {
      margin-top: 1.8rem;
    }
  } */
`
