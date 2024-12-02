import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './reducer/cart';
import apiService from '../services/api';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    [apiService.reducerPath]: apiService.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiService.middleware),
});

export type RootReducer = ReturnType<typeof store.getState>;
