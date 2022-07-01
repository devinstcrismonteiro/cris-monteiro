import Img from 'next/image'

import HeroImg from '../../assets/images/midia.png'

import Hero from './Hero'
import ChannelNews from '../ChannelNews'

import * as S from './styles'
import { Container } from '../../styles/base'

const HeroMidia = () => (
  <S.Wrapper4>
    <Container>
      <Hero leftColumn={1} rightColumn={1.4}>
        <S.TextHero>
          <h1>Na mídia</h1>
        </S.TextHero>
        <S.ImgHero>
          <Img
            className="img-load"
            src={HeroImg}
            alt="Cris monteiro"
            layout="responsive"
          />
        </S.ImgHero>
      </Hero>
    </Container>
    <S.HeroDesc>
      <div className="text">
        <Container>
          <p>
            Ao longo dos últimos anos, além de nosso canal no Youtube, o
            Instituto Cris Monteiro também esteve em evidência em alguns dos
            mais famosos meios de comunicação do país.
          </p>
        </Container>
      </div>
      <div className="cta">
        <Container>
          <ChannelNews />
        </Container>
      </div>
    </S.HeroDesc>
  </S.Wrapper4>
)

export default HeroMidia
