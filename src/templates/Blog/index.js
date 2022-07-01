import Img from 'next/image'
import Link from 'next/link'

import Sidebar from '../../components/Sidebar'
import CTACursos from '../../components/CTACursos'

import DefaultImg from '../../assets/images/default-image.jpg'

import * as S from './styles'
import { Container } from '../../styles/base'

const Blog = ({ data }) => {
  return (
    <S.Wrapper>
      <Container>
        <h1 className='page-title'>Nosso Blog</h1>
        <S.Content>
          <div>
            {data.map((item) => {
              const description = item.content.replace(/<\/?[^>]+(>|$)/g, '')
              return (
                <article key={item.id}>
                  <Link href={'blog/' + item.slug} passHref>
                    <a>
                      <Img
                        className='img-load'
                        src={item.featuredImage?.sourceUrl || DefaultImg}
                        width={700}
                        height={350}
                      />
                    </a>
                  </Link>
                  <Link href={'blog/' + item.slug} passHref>
                    <a>
                      <h1>{item.title}</h1>
                    </a>
                  </Link>
                  <div className='post-details'>
                    <p>
                      {item.date} &#8226;{' '}
                      {item.author?.name && (
                        <>
                          Escrito por: <span>{item.author.name}</span>
                        </>
                      )}
                    </p>
                  </div>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: `${description.substring(0, 190)}...`,
                    }}
                  />
                  <Link id={`continue-${item.slug}`} href={'blog/' + item.slug}>
                    {'Continue lendo ->'}
                  </Link>
                </article>
              )
            })}
          </div>
          <Sidebar data={data} />
        </S.Content>
      </Container>
      <CTACursos />
    </S.Wrapper>
  )
}

export default Blog
