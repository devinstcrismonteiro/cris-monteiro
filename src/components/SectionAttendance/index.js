import Link from 'next/link'

import Card from '../Cards'

import { ButtonLink, ButtonWhatsApp } from '../Buttons'

import { Container } from '../../styles/base'
import { Wrapper } from './styles'

import { atendimentos } from '../../utils'

const Attendance = ({ hasLink = false, openOnNewTab, url, ...props }) => (
  <Wrapper {...props}>
    <Container>
      <div className='grid'>
        <div className='text-content'>
          <h1>Agende sua consulta</h1>
          {hasLink && (
            <Link href='atendimento' passHref>
              <ButtonLink id="btn-cta-atendimentos" as='a'>Conheça os atendimentos</ButtonLink>
            </Link>
          )}
          <p>Saiba mais sobre nossas terapias.</p>
          <p className='attendance__cta'>
            <ButtonWhatsApp id="attendance-btn-whats" />
          </p>
        </div>
        {atendimentos?.map((item) => (
          <Card
            key={item.title}
            openOnNewTab={openOnNewTab}
            {...item}
            {...(url ? { url } : {})}
          />
        ))}
      </div>
    </Container>
  </Wrapper>
)

export default Attendance
