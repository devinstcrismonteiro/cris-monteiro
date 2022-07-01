import Link from 'next/link'

import { Wrapper } from './styles'
import { Button } from '../../styles/base'

const CTACursos = () => (
  <Wrapper>
    <h1>Pronta para o próximo nível?</h1>
    <p>
      Eleve os seus relacionamentos e a sua saúde mental com os cursos do
      Instituto Cris Monteiro!
    </p>
    <Link href="/cursos" passHref>
      <Button as='a' id="blog-btn-todos-cursos">Conheça os nossos cursos</Button>
    </Link>
  </Wrapper>
)

export default CTACursos
