import React, { useEffect, useContext, useReducer } from 'react'
import reducer from '../reducers/cart_reducer'
import {
  TOGGLE_CART_ITEM,
  REMOVE_CART_ITEM,
  CLEAR_CART,
  ADD_APPOINTMENT,
  REMOVE_APPOINTMENT,
} from '../actions'

const getLocalStorage = (item) => {
  let store = localStorage.getItem(item)
  return store?JSON.parse(localStorage.getItem(item)):[]
}

const initialState = {
  cart: getLocalStorage('cart'),
  appointments: getLocalStorage('appointments')
}

const CartContext = React.createContext()

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const toggleStar = (id,isExamination) => {
    dispatch({ type: TOGGLE_CART_ITEM, payload: { id,isExamination } })
  }
  const removeItem = (id,isExamination) => {
    dispatch({ type: REMOVE_CART_ITEM, payload: {id,isExamination} })
  }
  const clearCart = () => {
    dispatch({ type: CLEAR_CART })
  }
  const addAppointment = (id,appointment) => {
    dispatch({ type: ADD_APPOINTMENT, payload: { id,appointment } })
  }
  const removeAppointment = (id) => {
    dispatch({ type: REMOVE_APPOINTMENT, payload: id })
  }

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(state.cart))
  }, [state.cart])

  useEffect(() => {
    localStorage.setItem('appointments', JSON.stringify(state.appointments))
  }, [state.appointments])

  return (
    <CartContext.Provider
      value={{ ...state, toggleStar, removeItem, clearCart, addAppointment, removeAppointment }}
    >
      {children}
    </CartContext.Provider>
  )
}
// make sure use
export const useCartContext = () => {
  return useContext(CartContext)
}
