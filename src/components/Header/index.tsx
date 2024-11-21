import { useSelector } from 'react-redux'

import * as S from './styles'
import { Produto } from '../../App'

import cesta from '../../assets/cesta.png'
import { toReal } from '../Produto'

import { StoreReducer } from '../../redux'

type Props = {
  favoritos: Produto[]
}

const Header = ({ favoritos }: Props) => {
  const itens = useSelector((state: StoreReducer) => state.carrinho.itens)
  const valorTotal = itens.reduce((acc, item) => {
    acc += item.preco
    return acc
  }, 0)

  return (
    <S.Header>
      <h1>EBAC Sports</h1>
      <div>
        <span>{favoritos.length} favorites</span>
        <img src={cesta} />
        <span>
          {itens.length} itens, total value: {toReal(valorTotal)}
        </span>
      </div>
    </S.Header>
  )
}

export default Header
