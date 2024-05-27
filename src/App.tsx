import { BrowserRouter } from 'react-router-dom'
import { GlobalCss } from './styles'
import Banner from './components/Home/banner'
import Rotas from './routes'
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <Banner />
      <Rotas />
      <Footer />
    </BrowserRouter>
  )
}

export default App
