import { createSlice, createSelector } from '@reduxjs/toolkit'

const initialState = {
  items: [], // { id, title, price, thumbnail, qty }
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const p = action.payload
      const existing = state.items.find((i) => i.id === p.id)
      if (existing) {
        existing.qty += 1
      } else {
        state.items.push({ id: p.id, title: p.title, price: p.price, thumbnail: p.thumbnail || (p.images && p.images[0]) || '', qty: 1 })
      }
    },
    removeFromCart: (state, action) => {
      const id = action.payload
      state.items = state.items.filter((i) => i.id !== id)
    },
    updateQty: (state, action) => {
      const { id, qty } = action.payload
      const it = state.items.find((i) => i.id === id)
      if (it) it.qty = Math.max(1, qty)
    },
    clearCart: (state) => {
      state.items = []
    },
  },
})

export const { addToCart, removeFromCart, updateQty, clearCart } = cartSlice.actions
export default cartSlice.reducer

// Selectors
export const selectCartItems = (state) => state.cart.items

export const selectCartCount = createSelector([selectCartItems], (items) =>
  items.reduce((sum, it) => sum + it.qty, 0)
)

export const selectCartTotal = createSelector([selectCartItems], (items) =>
  items.reduce((sum, it) => sum + it.price * it.qty, 0)
)
