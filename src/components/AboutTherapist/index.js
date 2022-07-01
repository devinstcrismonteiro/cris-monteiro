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
              Matrimônio, restauração, mediação, conciliação, reabilitação,
              convivência e resolução de conflitos.
            </p>
          </div>
          <Img src={Img1} alt="Cris 1" className="img-load" />
          <Img src={Img2} alt="Cris 2" className="img-load"/>
        </div>
      </Container>
    </div>
    <Container>
      <div className="content">
        <p>
          Idealizadora e fundadora do Instituto Cris Monteiro, também sou
          escritora, palestrante, terapeuta matrimonial holística e
          apresentadora de um canal no YouTube com mais de 260.000 seguidores,
          no qual abordo temas relacionados a melhoria do casamento,
          empoderamento feminino e superação, mostrando como é possível ser bem
          resolvida e casada ao mesmo tempo. ​
        </p>
        <p>
          Sou Terapeuta de Relacionamentos, com mais de 20 mil atendimentos e
          milhares de resultados de sucesso em minhas Avaliações, Estratégias e
          Consultorias Amorosas. ​Dona de uma emocionante história de amor e
          superação, na qual me tornei mãe e viúva muito cedo, ajudo esposas e
          maridos a salvarem seus relacionamentos, serem bem resolvidos e bem
          sucedidos no casamento.
        </p>
        <p>
          Sou licenciada pela Associação Brasileira dos Terapeutas, celebrante
          matrimonial, bacharel em Terapias Integrativas pela Universidade
          Cidade De São Paulo, coach de relacionamentos, com especialização em:
          ​Terapia Integrativa aplicada a saúde e bem estar da mulher;
          ​Terapêuticos para prevenção e bem estar humano; ​Nutrição Holística e
          Nutracêuticos pela Associação Brasileira dos Terapeutas; ​Terapia
          Ortomolecular e estética aplicada ao bem-estar físico, mental,
          estético e emocional. ​Fitoterapia enquanto técnica holística,
          natural, complementar e integrativa e sua atuação no campo físico,
          mental, emocional e energético para restabelecer o equilíbrio, o
          bem-estar e a energia. ​Transtornos Ansiosos e Depressivos, pelo
          Albert Einstein – Instituto Israelita de Ensino e Pesquisa. ​
        </p>
        <p>
          “O amor é um mistério. O sagrado se mistura ao mistério que poucos tem
          o prazer de desfrutar.” ​
        </p>
        <p>
          Assim sou eu… Cheia de histórias ocultas que me levaram a conhecer as
          barreiras que só quem tem coragem se permite atravessar. Uma travessia
          de batalhas que me levaram ao profundo conhecimento.
        </p>
        <p>
          Hoje, carrego comigo, por merecimento, a chave que abre a porta da paz
          no amor. ​ Entretanto, só eu conheço as renúncias que precisei fazer
          para conquistar o que poucas pessoas tem, “a habilidade de unir as
          pessoas”!
        </p>
      </div>
    </Container>
  </S.Wrapper>
)
export default AboutTherapist
