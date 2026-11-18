import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../Slices/Cartslice';
import userReducer from '../Slices/UserSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    user: userReducer,
  },
});