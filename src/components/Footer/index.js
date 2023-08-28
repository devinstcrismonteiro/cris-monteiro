import Link from 'next/link'
import Img from 'next/image'

import FooterLogo from '../../assets/images/logo-footer.svg'
import LogoCop from '../../assets/images/logo-cop.svg'

import SectionSocials from '../SectionSocials'

import * as S from './styles'
import { Container } from '../../styles/base'

const Footer = () => {
  return (
    <footer>
      <S.Wrapper>
        <Container>
          <S.FooterLogo>
            <Img src={FooterLogo} alt="Footer Logo" />
          </S.FooterLogo>
          <nav className="menu">
            <ul>
              <li id="menu-footer-inicio">
                <Link href="/">Início</Link>
              </li>
              <li id="menu-footer-sobre-mim">
                <Link href="/sobre-mim">Sobre mim</Link>
              </li>
              <li id="menu-footer-cursos">
                <Link href="/cursos">Cursos</Link>
              </li>
              <li id="menu-footer-atendimento">
                <Link href="/atendimento">Atendimento</Link>
              </li>
              {/* <li id="menu-footer-blog">
                <Link href="/blog">Blog</Link>
              </li> */}
              {/* <li>
                <Link href="/midia">Mídia</Link>
              </li> */}
            </ul>
          </nav>
          <SectionSocials />
          <nav className="privacy">
            <ul>
              <li id="btn-politicas-cookies">
                <Link href="/">Políticas de Cookies</Link>
              </li>
              <li id="btn-politicas-privacidade">
                <Link href="/">Política de Privacidade</Link>
              </li>
            </ul>
          </nav>
        </Container>
        <div className="cop">
          <p>Desenvolvido pela</p>
          <Img src={LogoCop} alt="Copright logo" />
        </div>
      </S.Wrapper>
    </footer>
  )
}

export default Footer
