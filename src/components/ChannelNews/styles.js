import styled from 'styled-components'
import media from 'styled-media-query'

import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline'

export const Wrapper = styled.div`
  padding: 4rem 0;
  ${media.lessThan('medium')`
    padding: 1rem 0;
  `}
`

export const IconsSection = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 15px;
  align-items: center;
  justify-items: center;

  > div {
    cursor: pointer;
  }

  ${media.lessThan('medium')`
    grid-template-columns: repeat(3, 1fr);
    margin: 1.5rem 0;

    svg {
      padding: 0.4rem;
    }
  `}

  img {
    cursor: pointer;
  }
`

export const NewsContent = styled.div`
  position: fixed;
  inset: 0;
  z-index: 80;
  background: #000000de;
  display: flex;
  align-items: center;
  justify-content:center;

  > div {
    overflow-y: scroll;
    max-height: 90vh;
    margin: 4rem 2rem 2rem;
 
  }

  ${media.lessThan('medium')`
    > div {
      margin: 3rem 10px;
    }
  `}

  iframe {
    width: 100%;
    height: 100%;
    max-width: 800px;
    max-height: 500px;

    &.full {
      background: #fff;
      max-height: 90vh;
      max-width: 95vw;
    }
  }
`

export const CloseIcon = styled(CloseOutline)`
  position: fixed;
  z-index: 85;
  color: white;
  right: 2rem;
  top: 20px;
  cursor: pointer;

  ${media.lessThan('medium')`
    top: 6px;
    right: 10px;
  `}
`
