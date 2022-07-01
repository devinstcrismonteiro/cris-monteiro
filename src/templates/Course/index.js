import Img from 'next/image'
import { useRouter } from 'next/router'

import * as S from './styles'
import { Container } from '../../styles/base'
import { ButtonShop, ButtonLink } from '../../components/Buttons'

const Course = ({ data }) => {
  const router = useRouter()

  return (
    <S.Wrapper>
      <Container>
        <ButtonLink onClick={() => router.back()} back className='btn-voltar' id="btn-cta-comeback">
          Voltar
        </ButtonLink>
        <S.ContentHeader>
          <div className='text'>
            <h1>{data.title}</h1>
            {data?.course_details?.price && (
              <h3>R$ {data?.course_details?.price}</h3>
            )}
            
            <p dangerouslySetInnerHTML={{ __html: data?.course_details?.description }}></p>

            {/* <Link href={data.course_details?.linkDoCurso || ''} passHref> */}
              {/* <a target='_blank'> */}
                <ButtonShop className='desk' id='cursos-btn-book-desk' reservation />
              {/* </a> */}
            {/* </Link> */}
          </div>
          {data.featuredImage?.sourceUrl && (
            <Img
              className='img-load'
              src={data.featuredImage?.sourceUrl}
              alt='Course Image'
              width={500}
              height={400}
            />
          )}
          {/* <Link href={data.course_details?.linkDoCurso || ''} passHref> */}
            {/* <a target='_blank'> */}
              <S.CenterElements>
                <ButtonShop className='mob center' id='cursos-btn-book-mob' reservation />
              </S.CenterElements>
            {/* </a> */}
          {/* </Link> */}
        </S.ContentHeader>
        <S.CourseRequirements>
          {data.course_details?.caracteristicas?.map((item) => (
            <div key={item.nome} className='item'>
              <h4>
                <strong>{item.numero}</strong> {item.nome}
              </h4>
              <p>{item.descricao}</p>
            </div>
          ))}
        </S.CourseRequirements>
        <S.TextContent dangerouslySetInnerHTML={{ __html: data.content }} />

        <S.TextCTA>
          <ButtonShop id='cursos-btn-book-text' reservation />
        </S.TextCTA>

      </Container>
      {/* <S.ShareComponent>
        <p>Compartilhar</p>
        <S.IconShare size={32} />
        <S.IconChat size={32} />
        <S.IconWhats size={32} />
      </S.ShareComponent> */}
    </S.Wrapper>
  )
}

export default Course
