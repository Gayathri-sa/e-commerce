import { createSlice } from '@reduxjs/toolkit'

const orderSlice = createSlice({
  name: 'orders',
  initialState: {
    orders: [],
    userOrders: [],
  },
  reducers: {
    createOrder: (state, action) => {
      state.orders.push(action.payload)
      state.userOrders.push(action.payload)
    },
    updateOrderStatus: (state, action) => {
      const order = state.orders.find(order => order.id === action.payload.id)
      if (order) {
        order.status = action.payload.status
      }
    },
    setUserOrders: (state, action) => {
      state.userOrders = action.payload
    },
  },
})

export const { createOrder, updateOrderStatus, setUserOrders } = orderSlice.actions
export default orderSlice.reducer