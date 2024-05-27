import bannerImg from '../../../src/images/banner_img.png'
import Tag from '../Tag'
import { Banner, Carrinho, Restaurant, Titulo, TituloP } from './styles'

const Hero = () => (
  <>
    <Restaurant>
      <h2>Restaurantes</h2>
    </Restaurant>
    <Carrinho>0 Produtos Adicionados no carrinho</Carrinho>
    <Banner style={{ backgroundImage: `url(${bannerImg})` }}>
      <div className="container">
        <Titulo>Italiana</Titulo>
        <TituloP>
          <h1>La Dolce Vita Trattoria</h1>
        </TituloP>
      </div>
    </Banner>
  </>
)

export default Hero
