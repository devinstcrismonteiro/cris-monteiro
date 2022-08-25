import Link from 'next/link'

import { Button } from '../../styles/base'
import { IconWhats, IconCart, IconArrowRight, IconArrowLeft } from './styles'

const ButtonWhatsApp = (props) => (
  <Link href='https://wa.me/5511988811961' passHref>
    <Button pulse as='a' target="_blank" {...props}>
      Agendar pelo Whatsapp
      <IconWhats size={34} />
    </Button>
  </Link>
)

const ButtonShop = ({ id, ...props}) => (
  <Link href={props.linkSrc || 'https://wa.me/5511988811961'} passHref>
    <a id={id} target="_blank">
      <Button soon {...props}>
        {/* {props.book ? 'Compre o livro' : 'Comprar o curso'} */}
        {/* <IconCart size={34} /> */}
        {props.text || (props.reservation ? 'Reserve o seu' : 'Em breve')}
      </Button>
    </a>
  </Link>
)

const ButtonLink = ({ children, back = false, ...props }) => (
  <Button {...props} link>
    {back && <IconArrowLeft size={35} />}
    {children}
    {!back && <IconArrowRight size={35} />}
  </Button>
)

export { ButtonWhatsApp, ButtonShop, ButtonLink }
