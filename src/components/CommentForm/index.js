import { Form } from './styles'
import {Button} from '../../styles/base'

const CommentForm = () => (
  <Form>
    <h3>Deixe seu comentário:</h3>
    <textarea rows="4" placeholder="Comentário" />
    <div className="input-content">
      <input type="text" placeholder="Nome e Sobrenome" />
      <input type="email" placeholder="Email" />
    </div>
    <Button>Postar comentário</Button>
  </Form>
)

export default CommentForm
