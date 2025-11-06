import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: JSON.parse(localStorage.getItem('user')) || null,
  isAdmin: JSON.parse(localStorage.getItem('isAdmin')) || false,
  isAuthenticated: !!localStorage.getItem('user'),
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload
      state.isAuthenticated = true
      state.isAdmin = action.payload?.role === 'admin'
      localStorage.setItem('user', JSON.stringify(action.payload))
      localStorage.setItem('isAdmin', JSON.stringify(action.payload?.role === 'admin'))
    },
    logout: (state) => {
      state.user = null
      state.isAuthenticated = false
      state.isAdmin = false
      localStorage.removeItem('user')
      localStorage.removeItem('isAdmin')
      localStorage.removeItem('cart')
    },
    updateProfile: (state, action) => {
      state.user = { ...state.user, ...action.payload }
      localStorage.setItem('user', JSON.stringify(state.user))
    },
  },
})

export const { login, logout, updateProfile } = authSlice.actions
export default authSlice.reducer