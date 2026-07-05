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
            Sou Cris Monteiro, pioneira em aconselhamentos afetivos no Brasil e
            uma das maiores referências em assuntos amorosos do país, autora do
            livro Quem Ama Não Desiste, criadora do Método IC e fundadora do
            Instituto do Casamento. Dedico minha trajetória à restauração de
            casamentos, reconquista, mediação, conciliação, resolução de
            conflitos, superação, fortalecimento dos relacionamentos e à
            formação de profissionais para atuação com casais e famílias.
          </p>

          <p className="slogan">
            Quem ama não desiste sem antes compreender, reparar e reconstruir.
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
