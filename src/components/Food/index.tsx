import Tag from '../Tag'
import {
  Botao,
  Card,
  Descricao,
  Div,
  Images,
  Infos,
  Star,
  Titulo
} from './styles'
import star from '../../images/estrela.png'
import { Nota, Saibamais } from '../Tag/styles'

type Props = {
  title: string
  description: string
  image: string
}

const Food = ({ title, description, image }: Props) => (
  <Card>
    <div>
      <Images src={image} />
    </div>
    <Div>
      <Titulo>{title}</Titulo>
      <Descricao>{description}</Descricao>
      <Botao>
        <a href="#">Adcionar ao carrinho</a>
      </Botao>
    </Div>
  </Card>
)

export default Food
