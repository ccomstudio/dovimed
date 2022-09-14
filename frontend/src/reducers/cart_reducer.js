import {
  TOGGLE_CART_ITEM,
  CLEAR_CART,
  REMOVE_CART_ITEM,
  ADD_APPOINTMENT,
  REMOVE_APPOINTMENT,
} from '../actions'

const cart_reducer = (state, action) => {
  if (action.type === TOGGLE_CART_ITEM) {
    const { id,isExamination } = action.payload
    const currentItem = state.cart.find((i) => i.id === id&&i?.isExamination===isExamination)
    if (currentItem) {
      const newCart = state.cart.filter((i) => i.id !== id || (i.id === id&& i?.isExamination!==isExamination))
      return { ...state, cart: newCart }
    } else {
      const newItem = {id,isExamination}
      return { ...state, cart: [...state.cart, newItem] }
    }
  }
  if (action.type === REMOVE_CART_ITEM) {
    const newCart = state.cart.filter((item) => item.id !== action.payload.id || (item.id === action.payload.id && item.isExamination!==action.payload.isExamination))
    return { ...state, cart: newCart }
  }
  if (action.type === CLEAR_CART) {
    return { ...state, cart: [] }
  }
  if (action.type === ADD_APPOINTMENT) {
    const { id,appointment } = action.payload
      return { ...state, appointments: [...state.appointments, {id,...appointment}] }
  }
  if (action.type === REMOVE_APPOINTMENT) {
    const newAppointments = state.appointments.filter((item) => item.id !== action.payload)
    return { ...state, appointments: newAppointments }
  }
  throw new Error(`No Matching "${action.type}" - action type`)
}

export default cart_reducer
