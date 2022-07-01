import styled from 'styled-components'
import media from 'styled-media-query'

import { Whatsapp } from '@styled-icons/boxicons-logos/Whatsapp'
import { Cart } from '@styled-icons/ionicons-outline/Cart'
import { ArrowCircleRightOutline } from '@styled-icons/evaicons-outline/ArrowCircleRightOutline'
import { ArrowCircleLeftOutline } from '@styled-icons/evaicons-outline/ArrowCircleLeftOutline'

export const IconWhats = styled(Whatsapp)`
  color: #fff;
  margin-left: 5px;
`

export const IconCart = styled(Cart)`
  margin-left: 5px;
  color: var(--palette_2);
`

export const IconArrowRight = styled(ArrowCircleRightOutline)`
  color: var(--primary);
  margin-left: 35px;

  ${media.lessThan('medium')`
    margin-left: 5px;
    max-height: 30px;
  `}
`

export const IconArrowLeft = styled(ArrowCircleLeftOutline)`
  color: var(--primary);
  margin-right: 20px;

  ${media.lessThan('medium')`
    margin-right: 5px;
    max-height: 30px;
  `}
`
