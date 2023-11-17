import SectionHeader from "../SectionHeader";

import { useEffect, useState } from "react";
import { Container } from "../../styles/base";
import { ButtonShop } from "../Buttons";
import * as S from "./styles";

const CoursePreview = () => {
  const [isExterior, setIsExterior] = useState(false);
  const urlDefault =
    // "https://hotmart.com/pt-br/marketplace/produtos/voce-pode-salvar-o-seu-casamento/H62722095S";
    "https://lp.institutocrismonteiro.com.br";
  const urlExterior =
    "https://wp.institutocrismonteiro.com.br/voce-pode-salvar-seu-casamento-exterior/";

  useEffect(() => {
    // const isOther = window.location.hostname.includes('institutodocasamento')
    // setIsExterior(isOther)
    setIsExterior(false);
  }, []);

  return (
    <S.Wrapper>
      <Container>
        <SectionHeader leftColumn={2} rightColumn={1}>
          <S.TextContentLeft>
            <h1>
              Curso Online
              <br />
              Descubra o segredo do sucesso no relacionamento
            </h1>
          </S.TextContentLeft>
        </SectionHeader>

        <div className="video">
          {/* <video
            src="https://wp.institutocrismonteiro.com.br/wp-content/uploads/2021/12/cris-movie-1.mp4"
            controls={true}
          /> */}

          <iframe
            width="560"
            height="315"
            src="https://www.youtube-nocookie.com/embed/zwOsuj-gDGk?rel=0"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>

          {/* <Link href="https://go.hotmart.com/V40605865B?dp=1" passHref>
          <Button as="a" id="home-btn-eu-quero" target="_blank">Eu Quero</Button>
        </Link> */}

          <div className="video__cta">
            {!isExterior && (
              <ButtonShop
                id="home-btn-eu-quero"
                text="Saiba mais"
                linkSrc={urlDefault}
              />
            )}
            {isExterior && (
              <ButtonShop
                id="home-btn-eu-quero"
                text="Saiba mais"
                linkSrc={urlExterior}
              />
            )}
          </div>
        </div>
      </Container>
    </S.Wrapper>
  );
};

export default CoursePreview;
