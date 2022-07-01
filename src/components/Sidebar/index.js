import Img from 'next/image'
import Link from 'next/link'

import HeroImg from '../../assets/images/hero-therapist.png'

import { Button } from '../../styles/base'

import * as S from './styles'

const Sidebar = ({ data }) => (
  <S.Wrapper>
    <div className="cris-cta desk">
      <Img src={HeroImg} alt="Sobre a Cris" />
      <h4>Sobre a Cris Monteiro</h4>
      <p>
        Idealizadora e fundadora do Instituto Cris Monteiro, também sou
        escritora, palestrante, terapeuta matrimonial holística e apresentadora
        de um canal no YouTube com mais de 260.000 seguidores.
      </p>
      <Link id="sidebar-btn-sobre" href="/sobre-mim">{`Leia mais sobre a Cris ->`}</Link>
    </div>
    <form>
      <p>
        Tenha acesso gratuito a minha newsletter semanal com dicas sobre
        relacionamento, vida e como melhorar a sua saúde mental.
      </p>
      <input type="text" placeholder="Nome e sobrenome" />
      <input type="text" placeholder="Email" />
      <Button>Conheça os nossos cursos</Button>
      <small>100% seguro e sem spam.</small>
    </form>

    <div className="featured-posts">
      <h4>Posts mais lidos:</h4>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <Link href={'/blog/' + item.slug}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  </S.Wrapper>
)

export default Sidebar
