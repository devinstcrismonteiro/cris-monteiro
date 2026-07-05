import Link from 'next/link'

import Card from '../Cards'
import { ButtonWhatsApp } from '../Buttons'
import { IconArrowRight } from '../Buttons/styles'

import { Container } from '../../styles/base'
import { Wrapper } from './styles'

import { atendimentos } from '../../utils'

const CoursesAttendance = ({ courses = [] }) => (
  <Wrapper>
    <Container>
      <div className="grid">
        <div className="intro">
          <span className="eyebrow">Instituto Cris Monteiro</span>
          <h1>Cursos e Atendimentos</h1>
          <p>
            Saiba mais sobre as nossas terapias e conheça os nossos cursos. Dê
            o próximo passo para transformar os seus relacionamentos.
          </p>

          <div className="cta">
            <ButtonWhatsApp id="home-cursos-atendimento-whats" />
          </div>

          <div className="links">
            <Link href="/atendimento" passHref>
              <a className="link" id="home-link-atendimentos">
                Conheça os atendimentos
                <IconArrowRight size={26} />
              </a>
            </Link>
            <Link href="/cursos" passHref>
              <a className="link" id="home-link-todos-cursos">
                Conheça todos os cursos
                <IconArrowRight size={26} />
              </a>
            </Link>
          </div>
        </div>

        <div className="offerings">
          {Array.isArray(courses) &&
            courses.map((course) => (
              <Card key={course.id} type="course" {...course} />
            ))}
          {atendimentos?.map((item) => (
            <Card key={item.title} {...item} />
          ))}
        </div>
      </div>
    </Container>
  </Wrapper>
)

export default CoursesAttendance
