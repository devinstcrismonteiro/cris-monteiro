import styled from 'styled-components'
import media from 'styled-media-query'

import { ShareAndroid } from '@styled-icons/fluentui-system-regular/ShareAndroid'
import { ChatAlt2 } from '@styled-icons/heroicons-outline/ChatAlt2'
import { Whatsapp } from '@styled-icons/boxicons-logos/Whatsapp'

export const Wrapper = styled.section`
  margin-top: 1rem;

  .btn-voltar {
    min-width: unset;
    margin-bottom: 2rem;

    ${media.lessThan('medium')`
      margin: 0 auto 1rem;
    `}
  }

 
`

export const ContentHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 4rem;
  align-items: flex-start;

  ${media.lessThan('medium')`
    grid-template-columns: 1fr;
    text-align: center;
    grid-gap: 2rem;
  `}

  h1 {
    margin-bottom: 1rem;
  }

  p {
    font-size: 20px;
  }
  h3 {
    font-size: 48px;
    font-weight: 900;
    margin: 1.5rem 0;
  }

  button {
    margin-top: 1.5rem;

    ${media.lessThan('medium')`
      margin-top: 0.5rem;
    `}
  }

  img {
    border-top-left-radius: 40px;

    ${media.lessThan('medium')`
      border-bottom-right-radius: 40px;
    `}
  }
`

export const CourseRequirements = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 3rem 0 5rem;

  ${media.lessThan('large')`
    gap: 2rem;
  `}

  ${media.lessThan('medium')`
    flex-wrap: wrap;
    flex-direction: column;
    margin: 2rem 0;
  `}

  .item {
    h4 {
      font-size: 28px;

      strong {
        font-size: 72px;
      }
      margin-bottom: 0.5rem;
    }
    p {
      font-size: 22px;
      text-align: center;

      ${media.lessThan('large')`
        text-align: left;
        font-size: 20px;
      `}
    }

    ${media.lessThan('large')`
      width: 33%;
    `}

    ${media.lessThan('medium')`
      padding: 1rem 0;
      width: auto;
    `}
  }
`

export const TextContent = styled.div`
  margin-bottom: 4rem;
  p {
    font-size: 20px;
    margin-bottom: 2rem;
  }

  ${media.lessThan('medium')`
    margin-bottom: 2rem;
  `}
`

export const ShareComponent = styled.div`
  height: 80px;
  background: var(--brand_1);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;

  p {
    font-size: 20px;
  }
`

export const IconShare = styled(ShareAndroid)`
  color: var(--primary_dark);
`

export const IconChat = styled(ChatAlt2)`
  color: var(--primary_dark);
`

export const IconWhats = styled(Whatsapp)`
  color: var(--primary_dark);
`

export const TextCTA = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 0 0 3rem;
`

export const CenterElements = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
