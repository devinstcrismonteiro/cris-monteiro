import styled from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.section`
  .post_image {
    margin-bottom: 4rem;
  }

  .post-details {
    margin-top: 1rem;
    p {
      font-size: 20px;
      color: #c4c4c4;
      font-weight: 100;
    }
    span {
      color: var(--primary);
    }
  }

  .post {
    display: grid;
    grid-template-columns: 1.8fr 1fr;
    grid-gap: 10rem;
    margin-bottom: 2rem;

    .post_content {
      margin: 2rem 0;
      padding-bottom: 2rem;
      color: var(--primary_dark);
      /* border-bottom: 1px solid #c4c4c4; */

      & > * {
        margin-bottom: 2rem;
      }

      p {
        font-size: 18px;
      }
    }
  }

  ${media.lessThan('medium')`
    .post {
      grid-template-columns: 1fr;
      grid-gap: 4rem;
    }

    .post_image {
        margin-bottom: 2rem;
      }
  `}
`
