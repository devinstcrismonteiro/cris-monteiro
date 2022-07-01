import styled from 'styled-components'
import media from 'styled-media-query'

import { Instagram } from '@styled-icons/boxicons-logos/Instagram'
import { Youtube } from '@styled-icons/boxicons-logos/Youtube'
import { LinkedinSquare } from '@styled-icons/boxicons-logos/LinkedinSquare'
import { Twitter } from '@styled-icons/boxicons-logos/Twitter'

export const Wrapper = styled.nav`
  span {
    display: flex;
    align-items: center;
  }
  a {
    padding: 0 0.5rem!important;
    color: white;
    :hover {
      color: white;
    }
  }

  ${media.lessThan('medium')`
    display: flex;
    justify-content: center;
    text-align: center;

    span {
      display: inline-block!important;
      p {
        width: 100%;
        margin-bottom: 0.8rem;
      }
    }
  `}

`

export const InstagramIcon = styled(Instagram)`
  background: var(--primary_light);
  border-radius: 50%;
  padding: 5px;
`

export const YoutubeIcon = styled(Youtube)`
  background: var(--primary_light);
  border-radius: 50%;
  padding: 5px;
`
export const LinkedinIcon = styled(LinkedinSquare)`
  background: var(--primary_light);
  border-radius: 50%;
  padding: 5px;
`
export const TwitterIcon = styled(Twitter)`
  background: var(--primary_light);
  border-radius: 50%;
  padding: 5px;
`
