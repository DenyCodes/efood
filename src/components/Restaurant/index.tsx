import Tag from '../Tag'
import { Card, Descricao, Div, Images, Infos, Star, Titulo } from './styles'
import star from '../../images/estrela.png'
import { Nota, Saibamais } from '../Tag/styles'

type Props = {
  title: string
  category: string
  system: string
  description: string
  infos: string[]
  image: string
}

const Restaurant = ({
  title,
  category,
  system,
  description,
  infos,
  image
}: Props) => (
  <Card>
    <Images src={image} />
    <Infos>
      {infos.map((infos) => (
        <Tag key={infos}>{infos}</Tag>
      ))}
    </Infos>
    <Div>
      <Star>
        <img src={star} />
      </Star>
      <Titulo>{title}</Titulo>
      <Saibamais>{category}</Saibamais>
      <Nota>{system}</Nota>
      <Descricao>{description}</Descricao>
    </Div>
  </Card>
)

export default Restaurant
