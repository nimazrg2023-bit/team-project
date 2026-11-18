import { createSlice } from '@reduxjs/toolkit';

const loadCartFromStorage = () => {
    try {
        const serializedState = localStorage.getItem('cart');
        if (serializedState === null) return { items: [] };
        return JSON.parse(serializedState);
    } catch (err) {
        return { items: [] };
    }
};

const initialState = loadCartFromStorage();

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const { product, quantity, selectedColor, selectedSize } = action.payload;
            const existingItem = state.items.find(
                (item) => item.id === product.id && item.color === selectedColor && item.size === selectedSize
            );
            if (existingItem) {
                existingItem.quantity += quantity;
            } else {
                state.items.push({ id: product.id, title: product.title, image: product.image, price: product.price, quantity, color: selectedColor, size: selectedSize });
            }
            localStorage.setItem('cart', JSON.stringify(state));
        },
        removeFromCart: (state, action) => {
            const { id, color, size } = action.payload;
            state.items = state.items.filter((item) => !(item.id === id && item.color === color && item.size === size));
            localStorage.setItem('cart', JSON.stringify(state));
        },
        updateQuantity: (state, action) => {
            const { id, color, size, newQuantity } = action.payload;
            const item = state.items.find((item) => item.id === id && item.color === color && item.size === size);
            if (item && newQuantity >= 1) {
                item.quantity = newQuantity;
            }
            localStorage.setItem('cart', JSON.stringify(state));
        },
        clearCart: (state) => {
            state.items = [];
            localStorage.setItem('cart', JSON.stringify(state));
        }
    },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;