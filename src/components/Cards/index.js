import Img from 'next/image'
import Link from 'next/link'

import Image from '../../assets/images/default-image.jpg'

import * as S from './styles'
import { Button } from '../../styles/base'
import { useEffect, useState } from 'react'

const Card = ({
  image,
  shortDescription,
  url = '/',
  openOnNewTab = false,
  ...props
}) => {
  const [isExterior, setIsExterior] = useState(false)
  const urlDefault = 'https://wp.institutocrismonteiro.com.br/voce-pode-salvar-seu-casamento/'
  const urlExterior = 'https://wp.institutocrismonteiro.com.br/voce-pode-salvar-seu-casamento-exterior/'

  useEffect(() => {
    // const isOther = window.location.hostname.includes('institutodocasamento')
    // setIsExterior(isOther)
    setIsExterior(false)
  }, [])

  const postImg = props.featuredImage?.sourceUrl || image || Image
  const short_content = shortDescription
    ? shortDescription
    : `${props.content?.substring(0, 100)}...`

  const link =
    props.type === 'course'
      ? (props.slug === 'vocepodesalvarseucasamento' ? urlDefault : `/curso/${props.slug}`)
      : props.type === 'blog'
      ? `/blog/${props.slug}`
      : props.type === 'therapist'
      ? `/terapeuta/${props.slug}`
      : url

  return (
    <>
      <S.Card
        slider={props.slider}
        type={props.type}
        first={props.first}
        margin={props.margin}
      >
        <div className='card'>
          <div className='img-load'>
            <Img
              src={postImg}
              alt='Terapeuta'
              width={340}
              height={240}
              layout='responsive'
            />
          </div>
          <div className='card-content'>
            <h3>{props.title || 'Thais Terapeuta'}</h3>
            {/* <p>
              <small>Informações especialidade do terapeuta e crm</small>
            </p> */}

            {props.type !== 'blog' && short_content && (
              <p
                style={{ margin: 'auto 0' }}
                dangerouslySetInnerHTML={{ __html: short_content }}
              />
            )}

            {props.type !== 'blog' && !isExterior && (
              <Link href={link} passHref>
                <Button as='a' id={props.slug} target={openOnNewTab ? '_blank' : ''}>
                  Saiba mais!
                </Button>
              </Link>
            )}

            {props.type !== 'blog' && isExterior && (
              <Link href={urlExterior} passHref>
                <Button as='a' id={props.slug} target={openOnNewTab ? '_blank' : ''}>
                  Saiba mais!
                </Button>
              </Link>
            )}
          </div>
        </div>
        {props.type === 'blog' && (
          <Link href={link} passHref>
            <Button as='a' id={`home-blog-${props.slug}`}>
              Ver mais!
            </Button>
          </Link>
        )}
      </S.Card>
    </>
  )
}

export default Card
