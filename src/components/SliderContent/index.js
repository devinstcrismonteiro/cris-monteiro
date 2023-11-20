import { cloneElement } from 'react';
import Link from 'next/link';

import SectionHeader from '../SectionHeader';
import { ButtonLink } from '../Buttons';
import ScrollContainer from 'react-indiana-drag-scroll';

import * as S from './styles';
import { Container } from '../../styles/base';

const SliderContent = ({
  id = '',
  title,
  subtitle,
  description,
  leftColumn,
  rightColumn,
  blog = false,
  courses = false,
  variant,
  children,
  hideHeader = false
}) => {
  return (
    <S.Wrapper secondary={variant === 'secondary'} courses={courses}>
      {!hideHeader && (
        <Container>
          <SectionHeader
            leftColumn={leftColumn}
            rightColumn={rightColumn}
            secondary={variant === 'secondary'}
          >
            <S.TitleContent>
              {title && <h1>{title}</h1>}

              {subtitle && (
                <Link href='/cursos' passHref>
                  <ButtonLink as='a' id={id} className='desk'>
                    {subtitle}
                  </ButtonLink>
                </Link>
              )}
            </S.TitleContent>
            {description && (
              <S.TextContent blog={blog}>{description}</S.TextContent>
            )}
          </SectionHeader>
        </Container>
      )}
      <Container>
        <S.Slider>
          <ScrollContainer className='indiana-scroll-container--hide-scrollbars'>
            <div className='slider'>
              <>
                {children?.map((item, index) =>
                  cloneElement(item, {
                    key: index,
                  })
                )}
                <div className='hidden'>.</div>
              </>
            </div>
          </ScrollContainer>
        </S.Slider>
      </Container>
      <Container>
        {blog && (
          <Link href='/blog' passHref>
            <ButtonLink as='a' id='btn-cta-posts' className='see-all'>
              Ver todos os posts
            </ButtonLink>
          </Link>
        )}
      </Container>
    </S.Wrapper>
  );
};

export default SliderContent;
