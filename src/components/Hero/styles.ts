import { styled } from 'styled-components'

export const Banner = styled.div`
  position: relative;
  width: 100%
  display: block;
  height: 280px;
  top: -220px;

  background-position: center;
  background-repeat: no-repeat;
  background-size: 100%;

  &::after {
    position: absolute;
    background-color: #000;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    content: '';
    opacity: 0.56;
  }
`
export const Titulo = styled.div`
  color: #fff;
  font-family: Roboto;
  font-size: 32px;
  font-style: normal;
  font-weight: 100;
  line-height: normal;
  width: 101px;
  height: 33.25px;
  flex-shrink: 0;
  padding-top: 24px;
  left: 355px;
  position: absolute;
`
export const Restaurant = styled.div`
  position: absolute;
  z-index: 1;
  top: 76px;
  margin-left: 354px;
  color: #e66767;
  text-align: center;
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
`
export const Carrinho = styled.div`
  width: 256px;
  color: #e66767;
  text-align: right;
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  position: absolute;
  z-index: 1;
  top: 76px;
  margin-left: 1264px;
`
export const TituloP = styled.div`
  width: 676px;
  /* height: 33.25px; */
  /* flex-shrink: 0; */
  color: #fff;
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  position: relative;
  z-index: 1;
  padding-top: 197px;
  /* padding-right: 27px; */
  margin-left: -74px;
`
