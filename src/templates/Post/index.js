import Img from 'next/image'
import Link from 'next/link'

import CommentForm from '../../components/CommentForm'
import SideBar from '../../components/Sidebar'
import CTACursos from '../../components/CTACursos'

import Image from '../../assets/images/default-image.jpg'

import * as S from './styles'
import { Container } from '../../styles/base'

const Course = ({ data, posts }) => (
  <S.Wrapper>
    <Container>
      <div className="post_image img-load">
        <Img
          src={data.featuredImage?.sourceUrl || Image}
          alt={data.title}
          width={1200}
          height={500}
        />
      </div>
      <div className="post">
        <div className="post_text">
          <h1>{data.title}</h1>
          <div className="post-details">
            <p>
              {data.date} &#8226;{' '}
              {data.author?.name && (
                <>
                  Escrito por: <span>{data.author.name}</span>
                </>
              )}{' '}
              {/* &#8226;{' '} */}
              {/* <Link href="/">
                {(data.commentCount || '0') +
                  ` comentário${data.commentCount > 1 ? 's' : ''}`}
              </Link> */}
            </p>
          </div>
          <div
            className="post_content"
            dangerouslySetInnerHTML={{ __html: data.content }}
          ></div>
          {/* <CommentForm /> */}
        </div>
        <SideBar data={posts} />
      </div>
    </Container>
    <CTACursos />
  </S.Wrapper>
)

export default Course
