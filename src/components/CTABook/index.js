import Img from "next/image";

import Book2 from "../../assets/images/livro-2023-1-2.png";

import { ButtonShop } from "../Buttons";

import * as S from "./styles";
import { Container } from "../../styles/base";

const CTABookHome = () => (
  <S.Wrapper bgGrey>
    <div className="line" />
    <Container>
      <div className="book-cta">
        <div className="book-img">
          <Img src={Book2} alt="Livro Instituto Cris Monteiro" />
        </div>
        <div className="book-cta-text">
          <h1>Lançamento do Livro</h1>
          <p>
            Quem ama não desiste! “A possibilidade de restaurar o improvável é o
            que torna a minha vida mais interessante”. <br /> Adquira meu manual
            de inteligência emocional íntima para ser feliz. Sim, você pode
            salvar o seu casamento.
          </p>
          <ButtonShop
            id="home-btn-book"
            book
            reservation
            text="Adquira já o seu"
            linkSrc="https://www.amazon.com.br/Quem-ama-desiste-Cris-Monteiro/dp/6558792931"
          />
        </div>
      </div>
    </Container>
  </S.Wrapper>
);

const CTABook = () => (
  <S.Wrapper>
    <Container>
      <div className="cta-book">
        <div className="book-cta-text">
          <h1>Tudo o que você precisa em um único livro</h1>
          {/* <h3>R$ 99,99</h3> */}
          <p>
            Quem ama não desiste! “A possibilidade de restaurar o improvável é o
            que torna a minha vida mais interessante”. <br /> Adquira meu manual
            de inteligência emocional íntima para ser feliz. Sim, você pode
            salvar o seu casamento.
          </p>
          <ButtonShop
            id="btn-cta-book-desk"
            className="desk"
            book
            reservation
          />
        </div>
        <Img src={Book2} alt="Livro Instituto Cris Monteiro" />
        <ButtonShop className="mob" id="btn-cta-book-mob" book reservation />
      </div>
    </Container>
  </S.Wrapper>
);

export { CTABookHome, CTABook };
