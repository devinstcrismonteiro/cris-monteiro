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
          <Img src={Img2} alt="Cris 2" className="img-load" />
        </div>
      </Container>
    </div>
    <Container>
      <div className="content">
        <p>
          Idealizadora e fundadora do Instituto Cris Monteiro, também sou escritora, palestrante, terapeuta matrimonial holística. Sou apresentadora de um canal no YouTube, com mais de 297.000 seguidores, no qual abordo temas relacionados à melhoria do casamento, empoderamento feminino e superação, mostrando como é possível serem bem resolvidos e casados ao mesmo tempo. 
        </p>
        <p>
          Sou Terapeuta de casal, com mais de 7 mil casos atendidos ao longo de minha carreira, ou seja, 22 mil atendimentos e milhares de resultados de sucesso e reconhecimento em minhas Avaliações, Estratégias e Pioneirismo em minhas Consultorias Amorosas. Dona de uma emocionante história de amor e superação, na qual me tornei mãe e viúva muito cedo, ajudo esposas e maridos a salvarem seus relacionamentos, serem bem resolvidos e bem sucedidos no casamento.
        </p>
        <p>
          Sou licenciada pela Associação Brasileira dos Terapeutas, acadêmica em Mediação, mentora de relacionamentos, com especialização em: Terapia Integrativa aplicada a saúde e bem-estar da mulher; Terapêuticos para prevenção e bem-estar humano; Nutrição Holística e Nutracêuticos pela Associação Brasileira dos Terapeutas; Terapia Ortomolecular e estética aplicada ao bem-estar físico, mental, estético e emocional. Fitoterapia enquanto técnica holística, natural, complementar e integrativa e sua atuação no campo físico, mental, emocional e energético para restabelecer o equilíbrio, o bem-estar e a energia. Transtornos Ansiosos e Depressivos, pelo Instituto israelita e Pesquisa Albert Einstein.
        </p>
        <p>
        Frequentemente sou convidada a participar, contribuindo com meu conhecimento, nos principais jornais, portais e programas de TV do Brasil.
        </p>
        <p>
          "A possibilidade de restaurar o improvável é o que torna a minha vida mais interessante" (trecho do meu livro Quem ama não desiste).
        </p>
      </div>
    </Container>
  </S.Wrapper>
)
export default AboutTherapist
