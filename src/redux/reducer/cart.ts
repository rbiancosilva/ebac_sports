import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Produto } from '../../App';

interface CartState {
  products: Produto[];
}

const defaultState: CartState = {
  products: [],
};

const cartModule = createSlice({
  name: 'shoppingCart',
  initialState: defaultState,
  reducers: {
    appendProduto: (currentState, action: PayloadAction<Produto>) => {
      const newProduct = action.payload;

      const exists = currentState.products.some((item) => item.id === newProduct.id);

      if (exists) {
        alert('This product is already in the cart.');
      } else {
        currentState.products = [...currentState.products, newProduct];
      }
    },
  },
});

export const { appendProduct } = cartModule.actions;
export default cartModule.reducer;
