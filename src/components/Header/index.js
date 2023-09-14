import { useState } from 'react'
import Link from 'next/link'
import Img from 'next/image'
import { useRouter } from 'next/dist/client/router'
import { Whatsapp } from '@styled-icons/boxicons-logos/Whatsapp'

import Logo from '../../assets/images/logo.svg'
import Menu from '../../assets/images/menu.svg'

import { ButtonWhatsApp } from '../Buttons'

import * as S from './styles'
import { Container } from '../../styles/base'

const MenuLinks = [
  { name: 'Início', path: '/', slug: 'inicio' },
  { name: 'Sobre mim', path: '/sobre-mim', slug: 'sobre-min', minWidth: true },
  { name: 'Cursos', path: '/cursos', slug: 'cursos' },
  { name: 'Atendimento', path: '/atendimento', slug: 'atendimento' },
  { name: 'Blog', path: '/blog', slug: 'blog' },
  // { name: 'Mídia', path: '/midia' },
]

const NavMenu = ({ type, onClose }) => {
  const { pathname } = useRouter()

  return (
    <ul className={type}>
      {MenuLinks.map((menu) => (
        <S.MenuLink
          key={menu.name}
          onClick={onClose}
          active={menu.path === pathname}
          minWidth={menu.minWidth}
          id={`menu-header-${menu.slug}`}
        >
          <Link href={menu.path}>{menu.name}</Link>
        </S.MenuLink>
      ))}
    </ul>
  )
}

const Header = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <S.Wrapper>
        <Container>
          <nav>
            <Link href='/' passHref>
              <Img src={Logo} alt='Site logo' />
            </Link>
            <NavMenu type='desk' />
            <ButtonWhatsApp className='desk' id="header-btn-whats-desktop"  />
            <Link href='https://wa.me/5511988811961' passHref>
              <a target='_blank' id='header-btn-whats-mobile' className='header-btn-whats-mobile'>
                <Whatsapp className='mob' size={30} color='currentColor' /> Agendar
              </a>
            </Link>
            <Img
              className='mob'
              src={Menu}
              alt='Ícone menu'
              onClick={() => setOpen(true)}
            />
          </nav>
        </Container>
      </S.Wrapper>
      <S.NavMob className='mob' open={open}>
        <NavMenu type='mob' onClose={() => setOpen(false)} />
        <div className='btn-close' onClick={() => setOpen(false)}>
          Fechar
        </div>
      </S.NavMob>
    </>
  )
}

export default Header
