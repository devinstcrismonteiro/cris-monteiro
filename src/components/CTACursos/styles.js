import styled from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.section`
  background: #f0e8eb;
  padding: 4rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  p {
      max-width: 580px;
      font-size: 20px;
      margin: 1rem 0 2rem;
      line-height: 1.2;
  }

  a {
      border-radius: 0;
  }

  ${media.lessThan('medium')`
    padding: 4rem 2rem;
  `}
`
