import { useDispatch } from 'react-redux'
import { appendProduct } from '../../redux/reducer/cart'
import { Produto as ProductClass } from '../../App'
import * as S from './styles'


type Props = {
  produto: ProductClass
  favoritar: (produto: ProductClass) => void
  estaNosFavoritos: boolean
}

export const toReal = (value: number) =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
    value
  )

const ProdutoComponent = ({ produto, favoritar, estaNosFavoritos }: Props) => {
  const dispatch = useDispatch()
  return (
    <S.Produto>
      <S.Capa>
        <img src={produto.imagem} alt={produto.nome} />
      </S.Capa>
      <S.Titulo>{produto.nome}</S.Titulo>
      <S.Prices>
        <strong>{toReal(produto.preco)}</strong>
      </S.Prices>
      <S.BtnComprar onClick={() => favoritar(produto)} type="button">
        {estaNosFavoritos
          ? '- Remove from favorites'
          : '+ Add to favortites'}
      </S.BtnComprar>
      <S.BtnComprar onClick={() => dispatch(appendProduct(produto))} type="button">
        Add to cart
      </S.BtnComprar>
    </S.Produto>
  )
}

export default ProdutoComponent
