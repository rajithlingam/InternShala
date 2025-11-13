// src/redux/cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { items: [] },
  reducers: {
    addToCart(state, action) {
      const p = action.payload;
      const existing = state.items.find((i) => i.id === p.id);
      if (existing) {
        existing.qty = (existing.qty || 1) + 1;
      } else {
        state.items.push({ ...p, qty: 1 });
      }
    },
    removeFromCart(state, action) {
      const id = action.payload;
      state.items = state.items.filter((i) => i.id !== id);
    },
    clearCart(state) {
      state.items = [];
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export const selectCartItems = (state) => state.cart.items;
export const selectCartTotal = (state) =>
  state.cart.items.reduce((s, i) => s + i.price * (i.qty || 1), 0);
export const selectCartCount = (state) =>
  state.cart.items.reduce((s, i) => s + (i.qty || 1), 0);

export default cartSlice.reducer;
