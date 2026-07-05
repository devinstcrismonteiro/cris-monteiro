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
            Cris Monteiro é pesquisadora de relacionamentos, terapeuta matrimonial, autora do livro Quem Ama Não Desiste, criadora do Método IC e fundadora do Instituto do Casamento. Ao longo de sua trajetória, realizou mais de 30 mil atendimentos e estudou mais de 3 mil casos de casais e famílias, experiência que serviu de base para o desenvolvimento de sua metodologia voltada à restauração de vínculos, mediação de conflitos e fortalecimento dos relacionamentos. Também é palestrante e apresentadora de um canal no YouTube com mais de 300 mil seguidores.
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
