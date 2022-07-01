import Img from 'next/image'

import HeroImg from '../../assets/images/atendimento.png'

import Hero from './Hero'

import * as S from './styles'
import { Container, Button } from '../../styles/base'
import { ButtonWhatsApp } from '../Buttons'

const HeroTherapist = () => (
  <S.Wrapper2>
    <Container>
      <Hero leftColumn={1} rightColumn={1.4}>
        <S.TextHero>
          <h1>Atendimentos.</h1>
          <p>
            Conheça melhor os serviços que o Instituto Cris Monteiro oferece...
          </p>
          <ButtonWhatsApp className="desk" id="hero-btn-whats-desktop" />
        </S.TextHero>
        <S.ImgHero>
          <Img
            className="img-load"
            src={HeroImg}
            alt="Cris monteiro"
            layout="responsive"
          />
        </S.ImgHero>
        <ButtonWhatsApp className="mob" id="hero-btn-whats-mobile" />
      </Hero>
    </Container>
  </S.Wrapper2>
)

export default HeroTherapist
