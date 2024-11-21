import { Produto as ProductClass } from '../App';
import Produto from '../components/Produto';
import { useGetProdutoQuery } from '../services/api';

import * as Styled from './styles';

type Props = {
  favorites: ProductClass[];
  toggleFavorite: (item: ProductClass) => void;
};

const ProductList = ({ favorites, toggleFavorite }: Props) => {
  const { data: products, isLoading } = useGetProdutoQuery();

  if (isLoading) return <h2>Loading...</h2>;

  const isFavorite = (product: ProductClass): boolean => {
    return favorites.some((fav) => fav.id === product.id);
  };

  return (
    <Styled.ProductsContainer>
      {products?.map((product) => (
        <Produto
          key={product.id}
          produto={product}
          estaNosFavoritos={isFavorite(product)}
          favoritar={(item) => toggleFavorite(item)}
        />
      ))}
    </Styled.ProductsContainer>
  );
};

export default ProductComponent;
