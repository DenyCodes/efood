import Restaurants from '../Restaurant'
import Restaurant from '../models/Restaurant'
import { Container, Destaque, List } from './styles'

export type Props = {
  restaurants: Restaurant[]
}

const RestaurantList = ({ restaurants }: Props) => (
  <Container>
    <div>
      <List className="container">
        <Destaque>
          {' '}
          <a href=""> Destaque da semana</a>
        </Destaque>
        {restaurants.map((restaurants) => (
          <Restaurants
            key={restaurants.id}
            category={restaurants.category}
            image={restaurants.image}
            infos={restaurants.infos}
            system={restaurants.system}
            title={restaurants.title}
            description={restaurants.description}
          />
        ))}{' '}
      </List>
    </div>
  </Container>
)

export default RestaurantList
