import Img from 'next/image'

import Img1 from '../../assets/images/cris-1.png'
import Img2 from '../../assets/images/cris-2.png'

import * as S from './styles'
import { Container } from '../../styles/base'

const AboutTherapist = ({ data }) => (
  <S.Wrapper>
    <div className="about">
      <Container>
        <div className="grid">
          <div className="text-content">
            <h1>
              Um pouco
              <br /> sobre a Cris
            </h1>
            <p>
              Quem ama não desiste sem antes compreender, reparar e
              reconstruir.
            </p>
          </div>
          <Img src={Img1} alt="Cris 1" className="img-load" />
          <Img src={Img2} alt="Cris 2" className="img-load" />
        </div>
      </Container>
    </div>
    <Container>
      <div className="content">
        <p>
          Sou Cris Monteiro, pesquisadora de relacionamentos, terapeuta matrimonial, autora do livro Quem Ama Não Desiste, criadora do Método IC e fundadora do Instituto do Casamento.
        </p>
        <p>
          Há anos dedico minha vida ao estudo dos relacionamentos humanos, acompanhando casais e famílias em seus desafios, conflitos, recomeços e processos de reconstrução. Ao longo dessa trajetória, realizei mais de 30 mil atendimentos e estudei mais de 3 mil casos de casais e famílias, experiências que contribuíram para ampliar minha compreensão sobre as dinâmicas relacionais e para o desenvolvimento da metodologia que utilizo atualmente.
        </p>
        <p>
          Minha atuação é voltada à restauração de vínculos, à mediação de conflitos e ao fortalecimento das relações humanas. Acredito que, por trás de muitos problemas, existem histórias, necessidades, expectativas e dores que precisam ser compreendidas antes de serem julgadas.
        </p>
        <p>
          Também sou idealizadora do Instituto Cris Monteiro, palestrante e apresentadora do canal Cris Monteiro no YouTube, que reúne mais de 300 mil seguidores em busca de orientação para seus relacionamentos, suas famílias e seus desafios de convivência.
        </p>
        <p>
          Ao longo dos anos, desenvolvi o Método IC a partir da observação, pesquisa e acompanhamento de milhares de histórias reais. O método nasceu da prática, da investigação constante e da busca por caminhos mais eficazes para ajudar pessoas a compreenderem seus relacionamentos, fortalecerem seus vínculos e encontrarem novas possibilidades diante das dificuldades da vida a dois e da convivência familiar.
        </p>
        <p>
          Hoje, além dos atendimentos realizados por mim e pelos profissionais vinculados ao Instituto do Casamento, também me dedico à formação e capacitação de profissionais que desejam atuar com casais e famílias utilizando os fundamentos do Método IC.
        </p>
        <p>
          Minha própria história também foi marcada por experiências que me ensinaram sobre amor, perdas, recomeços e reconstrução. Essas vivências contribuíram para ampliar minha compreensão sobre os relacionamentos humanos e fortaleceram minha convicção de que, mesmo diante das maiores dificuldades, sempre é possível encontrar novos caminhos.
        </p>
        <p>
          Frequentemente sou convidada a compartilhar meu conhecimento em jornais, portais, podcasts e programas de televisão, contribuindo para o debate sobre relacionamentos, família e convivência humana.
        </p>
        <p>
          "A possibilidade de restaurar o improvável é o que torna a minha vida mais interessante" (Trecho do livro Quem Ama Não Desiste).
        </p>
      </div>
      <div className="closing">
        <h2>
          Sim, muitos relacionamentos podem ser restaurados quando existe direção
        </h2>
      </div>
    </Container>
  </S.Wrapper>
)
export default AboutTherapist
