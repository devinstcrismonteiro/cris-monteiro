import Img from "next/image";
import Link from "next/link";

import Image from "../../assets/images/default-image.jpg";

import { useEffect, useState } from "react";
import { Button } from "../../styles/base";
import * as S from "./styles";

const Card = ({
  image,
  shortDescription,
  url = "/",
  openOnNewTab = false,
  ...props
}) => {
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

  const postImg = props.featuredImage?.sourceUrl || image || Image;
  const short_content = shortDescription
    ? shortDescription
    : `${props.content?.substring(0, 100)}...`;

  const link =
    props.type === "course"
      ? props.slug === "vocepodesalvarseucasamento"
        ? urlDefault
        : `/curso/${props.slug}`
      : props.type === "blog"
      ? `/blog/${props.slug}`
      : props.type === "therapist"
      ? `/terapeuta/${props.slug}`
      : url;

  return (
    <>
      <S.Card
        slider={props.slider}
        type={props.type}
        first={props.first}
        margin={props.margin}
      >
        <div className="card">
          <div className="img-load">
            <Img
              src={postImg}
              alt="Terapeuta"
              width={340}
              height={240}
              layout="responsive"
            />
          </div>
          <div className="card-content">
            <h3>{props.title || "Thais Terapeuta"}</h3>
            {/* <p>
              <small>Informações especialidade do terapeuta e crm</small>
            </p> */}

            {props.type !== "blog" && short_content && (
              <p
                style={{ margin: "auto 0" }}
                dangerouslySetInnerHTML={{ __html: short_content }}
              />
            )}

            {props.type !== "blog" && !isExterior && (
              <Link href={link} passHref>
                <Button
                  as="a"
                  id={props.slug}
                  target={openOnNewTab ? "_blank" : ""}
                >
                  Saiba mais!
                </Button>
              </Link>
            )}

            {props.type !== "blog" && isExterior && (
              <Link href={urlExterior} passHref>
                <Button
                  as="a"
                  id={props.slug}
                  target={openOnNewTab ? "_blank" : ""}
                >
                  Saiba mais!
                </Button>
              </Link>
            )}
          </div>
        </div>
        {props.type === "blog" && (
          <Link href={link} passHref>
            <Button as="a" id={`home-blog-${props.slug}`}>
              Ver mais!
            </Button>
          </Link>
        )}
      </S.Card>
    </>
  );
};

const TherapistCard = ({
  image,
  description,
  name,
}) => {
  return (
    <>
      <S.Card type="course">
        <div className="card">
          <div className="img-load">
            <Img
              src={image}
              alt="Terapeuta"
              width={340}
              height={340}
              layout="responsive"
            />
          </div>
          <div className="card-content">
            <h3>{name}</h3>
            <p style={{ textAlign: 'justify', flexGrow: 1 }}>
              {description}
            </p>
            <Link href="https://wa.me/5511991176659" passHref>
              <Button as="a" target="_blank">
                Saiba mais!
              </Button>
            </Link>
          </div>
        </div>
      </S.Card>
    </>
  )
}

export { TherapistCard }

export default Card;
