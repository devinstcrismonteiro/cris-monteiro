import Img from 'next/image'
import Link from 'next/link'

import HeroImg from '../../assets/images/hero-therapist.png'

import Hero from './Hero'

import * as S from './styles'
import { Container } from '../../styles/base'

const HeroTherapist = () => (
  <S.Wrapper2 therapists>
    <Container>
      <Hero leftColumn={1.4} rightColumn={1}>
        <S.TextHero>
          {/* <h1>Nossos Terapeutas.</h1> */}
          {/* <p>
            O instituto Cris Monteiro, conta com uma das mais completas e
            capacitadas equipes de terapeutas do Brasil.
          </p> */}
        </S.TextHero>
        <S.ImgHero>
          <Img src={HeroImg} alt="Cris monteiro" layout="responsive" />
        </S.ImgHero>
      </Hero>
    </Container>
    <S.HeroDesc>
      <div className="text">
        <Container>
          <p>
            Idealizadora e fundadora do Instituto Cris Monteiro, também sou
            escritora, palestrante, terapeuta matrimonial holística e
            apresentadora de um canal no YouTube com mais de 260.000 seguidores
          </p>
        </Container>
      </div>
      {/* <div className="cta">
        <Container>
          <Link href="/terapeuta/cris-monteiro">Saiba mais sobre a Cris</Link>
        </Container>
      </div> */}
    </S.HeroDesc>
  </S.Wrapper2>
)

export default HeroTherapist
