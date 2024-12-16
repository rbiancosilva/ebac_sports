import { Produto as ProdutoType } from '../App'
import Produto from '../components/Produto'
import { useGetProdutosQuery } from '../services/api'
import { adcionar } from '../store/reducers/carrinho'

import * as S from './styles'

type Props = {
  favoritos: ProdutoType[]

  favoritar: (produto: ProdutoType) => void
}

const ProdutosComponent = ({ favoritos, favoritar }: Props) => {
  const produtoEstaNosFavoritos = (produto: ProdutoType) => {
    const produtoId = produto.id
    const IdsDosFavoritos = favoritos.map((f) => f.id)

    return IdsDosFavoritos.includes(produtoId)
  }
  const { data: Produtos } = useGetProdutosQuery()
  return (
    <>
      <S.Produtos>
        {Produtos?.map((produto) => (
          <Produto
            estaNosFavoritos={produtoEstaNosFavoritos(produto)}
            key={produto.id}
            produto={produto}
            favoritar={favoritar}
            aoComprar={adcionar}
          />
        ))}
      </S.Produtos>
    </>
  )
}

export default ProdutosComponent
