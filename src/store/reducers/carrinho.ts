import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../App'

type carrinhoState = {
  itens: Produto[]
}

const initialState: carrinhoState = {
  itens: []
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,

  reducers: {
    adcionar: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload

      if (state.itens.find((item) => item.id === produto.id)) {
        alert('Já adcionado no carrinho')
      } else {
        state.itens.push(produto)
      }
    }
  }
})

export const { adcionar } = carrinhoSlice.actions

export default carrinhoSlice.reducer
