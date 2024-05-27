import { styled } from 'styled-components'
import { TagContainer } from '../Tag/styles'
import { cores } from '../../styles'

export const Card = styled.div`
  width: 360px;
  height: 390px;
  flex-shrink: 0;
  background-color: #e66767;
  padding: 8px;
`

export const Titulo = styled.h3`
  color: #ffebd9;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
`
export const Descricao = styled.p`
  color: #ffebd9;
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  width: 304px;
  margin-top: 8px;
  line-height: 22px; /* 157.143% */
`
export const Infos = styled.div`
  position: absolute;
  top: 86px;
  right: 16px;
`
export const Images = styled.img`
  width: 472px;
  height: 217px;
  flex-shrink: 0;
  margin: 0;
`
export const Div = styled.div`
  width: 304px;
  height: 181px;
  flex-shrink: 0;
  padding: 8px 7px;
`
export const Star = styled.div`
  width: 21px;
  height: 21px;
  flex-shrink: 0;
  margin-left: 435px;
  position: absolute;
`
export const Botao = styled.div`
  width: 304px;
  height: 24px;
  flex-shrink: 0;
  background: #ffebd9;
  color: #e66767;
  text-align: center;
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  a {
    color: #e66767;
    text-align: center;
    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-decoration: none;
  }
`
