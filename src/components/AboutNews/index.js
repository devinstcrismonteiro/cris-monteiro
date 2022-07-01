import SectionHeader from '../SectionHeader'
import Card from '../Cards'

import * as S from './styles'
import { Container } from '../../styles/base'

const AboutNews = () => (
  <S.Wrapper>
    <Container>
      <SectionHeader leftColumn={2} rightColumn={1}>
        <S.TextContentLeft>
          {/* <p>Tudo que falam sobre a gente</p> */}
          <h1>Programas de TV, portais web, rádios, jornais e muito mais</h1>
        </S.TextContentLeft>
        {/* <p>
          Confira abaixo algumas das participações de nossa mentora Cris
          Monteiro...
        </p> */}
      </SectionHeader>
      <S.CardsSection>
        <Card />
        <Card />
        <Card />
      </S.CardsSection>
    </Container>
  </S.Wrapper>
)

export default AboutNews
