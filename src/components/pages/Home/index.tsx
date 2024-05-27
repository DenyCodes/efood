import ProductsList from '../../RestaurantList'
import Restaurant from '../../models/Restaurant'
import japa from '../../../images/japo.png'
import italiana from '../../../images/italiana.png'

const restaurant: Restaurant[] = [
  {
    id: 1,
    category: 'Saiba mais',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    title: 'Hioki Sushi',
    system: '4.9',
    infos: ['Japonesa'],
    image: japa
  },
  {
    id: 2,
    category: 'Saiba Mais',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    title: 'La Dolce Vita Trattoria',
    system: '4.6',
    infos: ['italiana'],
    image: italiana
  },
  {
    id: 3,
    category: 'Saiba Mais',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    title: 'La Dolce Vita Trattoria',
    system: '4.6',
    infos: ['italiana'],
    image: italiana
  },
  {
    id: 4,
    category: 'Saiba Mais',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    title: 'La Dolce Vita Trattoria',
    system: '4.6',
    infos: ['italiana'],
    image: italiana
  },
  {
    id: 5,
    category: 'Saiba Mais',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    title: 'La Dolce Vita Trattoria',
    system: '4.6',
    infos: ['italiana'],
    image: italiana
  },
  {
    id: 6,
    category: 'Saiba Mais',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    title: 'La Dolce Vita Trattoria',
    system: '4.6',
    infos: ['italiana'],
    image: italiana
  }
]

const Home = () => (
  <>
    <ProductsList restaurants={restaurant} />
  </>
)

export default Home
