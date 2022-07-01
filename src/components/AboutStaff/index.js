import Link from 'next/link'

import SectionHeader from '../SectionHeader'
import Card from '../Cards'

import { ButtonLink } from '../Buttons'

import * as S from './styles'
import { Container } from '../../styles/base'

const AboutStaff = ({ data, noLink = false }) => (
  <S.Wrapper>
    <Container>
      <SectionHeader leftColumn={2} rightColumn={1}>
        <S.TextContentLeft>
          <p>Quem irá te atender?</p>
          <h1>Uma das equipes de terapeutas mais capacitadas do Brasil</h1>
          {!noLink && (
            <Link href="/terapeutas" passHref>
              <ButtonLink as="a" id="btn-cta-team" className="desk">
                Conheça nossos especialistas
              </ButtonLink>
            </Link>
          )}
        </S.TextContentLeft>
        <p>Atendimentos personalizados para todos os casos!</p>
      </SectionHeader>
      <S.CardsSection>
        {data?.map((item) => (
          <Card
            key={item.id}
            {...item}
            shortDescription={item?.terapeutas_content?.shortDescription}
            type="therapist"
          />
        ))}
      </S.CardsSection>
    </Container>
  </S.Wrapper>
)

export default AboutStaff
