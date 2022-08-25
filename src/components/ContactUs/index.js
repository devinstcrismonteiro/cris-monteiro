import Link from 'next/link'

import { Container, Button } from '../../styles/base'
import * as S from './styles'

const ContactUs = () => (
  <S.Wrapper>
    <Container>
      <div className='text-content'>
        <h1>Fale Conosco</h1>
        <p>
          Esse é o espaço se você ainda ficou com alguma dúvida, ou quer nos
          enviar sua opinião a respeito da sua experiência no nosso website e
          com nossos produtos.
        </p>
        <Link href='https://wa.me/5511988811961' passHref>
          <a target='_blank' id="home-btn-fale-conosco">
            <Button>Enviar mensagem</Button>
          </a>
        </Link>
      </div>
      {/* <form>
          <Input placeholder="Nome e Sobrenome" type="text" required/>
          <Input placeholder="E-mail" type="email"/>
          <Input placeholder="Telefone" type="number"/>
          <Input placeholder="Mensagem" type="text"/>
          <Button className="mob">Enviar mensagem</Button>
        </form> */}
    </Container>
  </S.Wrapper>
)

export default ContactUs
