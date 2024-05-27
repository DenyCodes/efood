import Foods from '../Food'
import Food from '../models/Food'
import { Container, Destaque, List } from './styles'

export type Props = {
  foods: Food[]
}

const FoodList = ({ foods }: Props) => (
  <Container>
    <div>
      <List className="container">
        {foods.map((foods) => (
          <Foods
            key={foods.id}
            image={foods.image}
            title={foods.title}
            description={foods.description}
          />
        ))}{' '}
      </List>
    </div>
  </Container>
)

export default FoodList
