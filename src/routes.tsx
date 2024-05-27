import { Route, Routes } from 'react-router-dom'
import Home from './components/pages/Home'
import Categories from './components/pages/Categories'
import Product from './components/pages/Product'

const rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/categories/:id" element={<Categories />} />
    <Route path="/product/:id" element={<Product />} />
  </Routes>
)

export default rotas
