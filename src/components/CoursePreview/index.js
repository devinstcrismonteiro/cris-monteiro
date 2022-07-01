import Link from 'next/link'

import SectionHeader from '../SectionHeader'

import * as S from './styles'
import { Button, Container } from '../../styles/base'
import { ButtonShop } from '../Buttons'

const CoursePreview = () => (
  <S.Wrapper>
    <Container>
      <SectionHeader leftColumn={2} rightColumn={1}>
        <S.TextContentLeft>
          <h1>
            Curso Online
            <br />
            Você pode salvar seu casamento
          </h1>
        </S.TextContentLeft>
      </SectionHeader>

      <div className="video">
        <video
          src="https://wp.institutocrismonteiro.com.br/wp-content/uploads/2021/12/cris-movie-1.mp4"
          controls={true}
        />

        {/* <Link href="https://go.hotmart.com/V40605865B?dp=1" passHref>
          <Button as="a" id="home-btn-eu-quero" target="_blank">Eu Quero</Button>
        </Link> */}

        <div className='video__cta'>
          <ButtonShop id='home-btn-eu-quero' text="Saiba mais" linkSrc="https://wp.institutocrismonteiro.com.br/voce-pode-salvar-seu-casamento/" />
        </div>
      </div>
    </Container>
  </S.Wrapper>
)

export default CoursePreview
