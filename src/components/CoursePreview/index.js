import Link from 'next/link'

import SectionHeader from '../SectionHeader'

import * as S from './styles'
import { Button, Container } from '../../styles/base'
import { ButtonShop } from '../Buttons'
import { useEffect, useState } from 'react'

const CoursePreview = () => {
  const [isExterior, setIsExterior] = useState(false)
  const urlDefault = 'https://wp.institutocrismonteiro.com.br/voce-pode-salvar-seu-casamento/'
  const urlExterior = 'https://wp.institutocrismonteiro.com.br/voce-pode-salvar-seu-casamento-exterior/'

  useEffect(() => {
    const isOther = window.location.hostname.includes('institutodocasamento')
    setIsExterior(isOther)
  }, [])

  return (
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
            {!isExterior && <ButtonShop id='home-btn-eu-quero' text="Saiba mais" linkSrc={urlDefault} />}
            {isExterior && <ButtonShop id='home-btn-eu-quero' text="Saiba mais" linkSrc={urlExterior} />}
          </div>
        </div>
      </Container>
    </S.Wrapper>
  )
}

export default CoursePreview
