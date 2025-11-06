import { createSlice } from '@reduxjs/toolkit'
import { products } from '../../data/mockData'

const productSlice = createSlice({
  name: 'products',
  initialState: {
    items: products,
    filteredItems: products,
    wishlist: [],
  },
  reducers: {
    setFilteredProducts: (state, action) => {
      state.filteredItems = action.payload
    },
    addToWishlist: (state, action) => {
      if (!state.wishlist.find(item => item.id === action.payload.id)) {
        state.wishlist.push(action.payload)
      }
    },
    removeFromWishlist: (state, action) => {
      state.wishlist = state.wishlist.filter(item => item.id !== action.payload)
    },
    addProduct: (state, action) => {
      state.items.push(action.payload)
    },
    updateProduct: (state, action) => {
      const index = state.items.findIndex(item => item.id === action.payload.id)
      if (index !== -1) {
        state.items[index] = action.payload
      }
    },
    deleteProduct: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload)
    },
  },
})

export const { 
  setFilteredProducts, 
  addToWishlist, 
  removeFromWishlist, 
  addProduct, 
  updateProduct, 
  deleteProduct 
} = productSlice.actions
export default productSlice.reducer