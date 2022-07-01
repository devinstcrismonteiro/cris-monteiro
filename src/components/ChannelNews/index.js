import { useState } from 'react'
import Image from 'next/image'

import RedeVida from '../../assets/images/rede-vida-icon'
import SBT from '../../assets/images/sbt-icon'
import Gazeta from '../../assets/images/gazeta-icon'
import MinhaVida from '../../assets/images/minha-vida-icon'
import Estadao from '../../assets/images/estadao-icon.png'
import EstadaoNews from '../../assets/images/estadao-content.jpg'

import SectionHeader from '../SectionHeader'

import { Wrapper, IconsSection, NewsContent, CloseIcon } from './styles'

const ChannelNews = () => {
  const [showPopup, setShowPopup] = useState(false)

  const Popup = () => (
    <NewsContent>
      <CloseIcon onClick={() => setShowPopup(false)} width={40} height={40} />
      {showPopup === 'estadao' && (
        <div className='img-load'>
          <Image src={EstadaoNews} alt='news content' />
        </div>
      )}
      {showPopup === 'rede-vida' && (
        <iframe src='https://www.youtube.com/embed/zrovYw85BYE'></iframe>
      )}
      {showPopup === 'sbt' && (
        <iframe src='https://www.youtube.com/embed/_QMdostUgm0'></iframe>
      )}
      {showPopup === 'gazeta' && (
        <iframe
          className='full'
          src='https://www.semprefamilia.com.br/casamento-e-compromisso/hora-certa-casar/'
        ></iframe>
      )}
    </NewsContent>
  )

  return (
    <>
      <Wrapper>
        <SectionHeader leftColumn={0.4} rightColumn={1}>
          <h1>Na mídia</h1>
          <IconsSection>
            <div
              id='home-btn-rede-vida'
              onClick={() => setShowPopup('rede-vida')}
            >
              <RedeVida />
            </div>
            <div id='home-btn-sbt' onClick={() => setShowPopup('sbt')}>
              <SBT />
            </div>
            <div id='home-btn-gazeta' onClick={() => setShowPopup('gazeta')}>
              <Gazeta />
            </div>
            <a
              href='https://www.minhavida.com.br/bem-estar/materias/37281-5-dicas-para-superar-o-termino-do-relacionamento'
              target='_blank'
              rel='noreferrer'
              id='home-btn-minha-vida'
            >
              <MinhaVida />
            </a>
            <div id='home-btn-estadao' onClick={() => setShowPopup('estadao')}>
              <Image src={Estadao} alt='icon Estadao' height={30} width={140} />
            </div>
          </IconsSection>
        </SectionHeader>
      </Wrapper>
      {showPopup && <Popup />}
    </>
  )
}

export default ChannelNews
