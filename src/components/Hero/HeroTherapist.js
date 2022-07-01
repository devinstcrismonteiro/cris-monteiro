import Img from 'next/image'
import Link from 'next/link'

import HeroImg from '../../assets/images/hero-therapist.png'

import Hero from './Hero'
import { ButtonLink } from '../Buttons'

import * as S from './styles'
import { Container, Button } from '../../styles/base'

const HeroTherapist = ({ data }) => (
  <S.Wrapper3>
    <Container>
      <Hero leftColumn={1.2} rightColumn={0.8} gap={10}>
        <S.TextHero mb={4}>
          <Link href="/terapeutas" passHref>
            <ButtonLink as="a" id="btn-cta-comeback" back>
              Voltar
            </ButtonLink>
          </Link>

          <h1>{data?.title}</h1>
          <p>{data?.terapeutas_content?.shortDescription}</p>
          <Button>Agendar pelo Whatsapp</Button>
        </S.TextHero>
        <S.ImgHero>
          <Img
            className="img-load"
            src={data?.featuredImage?.sourceUrl}
            alt={data?.featuredImage?.altText}
            layout="fill"
          />
        </S.ImgHero>
      </Hero>
    </Container>
  </S.Wrapper3>
)

export default HeroTherapist
