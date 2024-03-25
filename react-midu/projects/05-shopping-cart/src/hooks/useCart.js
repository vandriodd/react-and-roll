import { useContext } from 'react'
import { CartContext } from '../context/cart'

//* GOOD PRACTICE
// In custom hooks that consumes context, always check if the context is undefined
export const useCart = () => {
  const context = useContext(CartContext)

  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider')
  }

  return context
}
