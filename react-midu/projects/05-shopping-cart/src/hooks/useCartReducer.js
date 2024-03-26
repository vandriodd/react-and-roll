import { useReducer } from 'react'
import { cartInitialState, cartReducer } from '../reducers/cart'

export const useCartReducer = () => {
  //^ dispatch -> function that sends actions to the reducer
  const [state, dispatch] = useReducer(cartReducer, cartInitialState)

  const addToCart = product => dispatch({
    type: 'ADD_TO_CART',
    payload: product
  })

  const clearCart = () => dispatch({ type: 'CLEAR_CART' })

  const removeFromCart = product => dispatch({
    type: 'REMOVE_FROM_CART',
    payload: product
  })

  return { addToCart, clearCart, removeFromCart, state }
}
