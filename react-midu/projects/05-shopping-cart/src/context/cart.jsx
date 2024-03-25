import { createContext, useState } from 'react'

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])

  const addToCart = (product) => {
    //* Easy way, but it's not the best way because spread operator does a shallow copy
    // setCart([...cart, product])

    // Check if the product is already in the cart
    const productInCartIndex = cart.findIndex((item) => item.id === product.id)

    // Way using structuredClone
    if (productInCartIndex >= 0) {
      //^ structuredClone -> It's a function that creates a deep copy of an object
      const newCart = structuredClone(cart)
      newCart[productInCartIndex].quantity += 1
    }

    // If product doesn't exist in the cart
    setCart(prevState => ([
      ...prevState,
      {
        ...product,
        quantity: 1
      }
    ]))
  }

  const removeFromCart = product => {
    setCart(prevState => prevState.filter(item => item.id !== product.id))
  }

  const clearCart = () => {
    setCart([])
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        clearCart,
        removeFromCart
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
