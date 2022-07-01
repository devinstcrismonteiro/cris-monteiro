import SectionHeader from '../SectionHeader'
import SectionSocials from '../SectionSocials'

import { Container } from '../../styles/base'
import * as S from './styles'

const YoutubeChannel = (props) => (
  <S.Wrapper moreMargin {...props}>
    <Container>
      <SectionHeader leftColumn={1.1} rightColumn={2}>
        <div className="img">
          <iframe
            src="https://www.youtube.com/embed/cPmqOfGoCSk"
          ></iframe>
        </div>
        <S.TextContent>
          <h1>
            Conheça meu <br />
            canal no Youtube
          </h1>
          <h4>#CrisMeAjuda</h4>
          <SectionSocials />
        </S.TextContent>
      </SectionHeader>
    </Container>
  </S.Wrapper>
)

export default YoutubeChannel
