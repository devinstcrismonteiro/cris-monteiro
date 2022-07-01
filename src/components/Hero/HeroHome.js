import Img from 'next/image'
import Link from 'next/link'

import HeroImg from '../../assets/images/hero-home.png'

import Hero from './Hero'

import * as S from './styles'
import { Container, Button } from '../../styles/base'

const HeroHome = () => (
  <S.Wrapper>
    <Container>
      <Hero leftColumn={1.4} rightColumn={1}>
        <S.TextHero>
          <h1 className="sr-only">
            Você pode salvar seu casamento
          </h1>
          <h1>
            Matrimônio, relacionamentos e família.
          </h1>
          <p>
            Meu nome é Cris Monteiro, sou pioneira em aconselhamentos afetivos
            no Brasil e uma das maiores referências em assuntos amorosos do
            país, estrategista e especialista em restauração de casamentos,
            mediação (casal e família), conciliação, reabilitação, superação,
            qualidade de convivência e resolução de conflitos.
          </p>

          <Link href="/sobre-mim" passHref>
            <Button as="a" id="home-btn-conheca">Conheça mais!</Button>
          </Link>
        </S.TextHero>
        <S.ImgHero>
          <Img src={HeroImg} alt="Cris monteiro" layout="responsive" priority />
        </S.ImgHero>
      </Hero>
    </Container>
  </S.Wrapper>
)

export default HeroHome
