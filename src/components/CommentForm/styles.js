import styled from 'styled-components'
import media from 'styled-media-query'

export const Form = styled.form`
  margin-top: 4rem;
  color: var(--palette_1);

  textarea,
  input {
    width: 100%;
    border-radius: 10px;
    padding: 1rem 1.4rem;
    margin-bottom: 1.5rem;

    &::placeholder {
        color: var(--palette_1);
    }
  }

  h3 {
    font-size: 28px;
    margin-bottom: 1rem;
  }

  .input-content {
      display: flex;
      gap: 1.5rem;

      ${media.lessThan('medium')`
        flex-direction: column;
        gap: 0;
      `}
  }

  button {
      border-radius: 0;
      margin-top: 1rem;

      ${media.lessThan('medium')`
        margin: 1rem auto 0;
      `}
  }
`
