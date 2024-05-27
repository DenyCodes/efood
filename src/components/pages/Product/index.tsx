import { useParams } from 'react-router-dom'
import Hero from '../../Hero'
import Tag from '../../Tag'
import Section from '../../Section'
import FoodList from '../../FoodList'
import Categories from '../Categories'

const Product = () => {
  const { id } = useParams()

  return (
    <>
      <Hero />
      <FoodList foods={[]} />
    </>
  )
}
export default Product
