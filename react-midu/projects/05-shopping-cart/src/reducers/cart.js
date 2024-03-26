export const cartInitialState =
  JSON.parse(window.localStorage.getItem('cart')) || []

export const CART_ACTION_TYPES = {
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART',
  CLEAR_CART: 'CLEAR_CART',
}

export const updateLocalStorage = (state) => {
  window.localStorage.setItem('cart', JSON.stringify(state))
}

// //! To use useReducer, we need: an initial state and a reducer function
// export const initialState = []
// //* reduce -> transforms the state based on the action and returns the new state
// export const reducer = (state, action) => {
//   //^ type -> string that describes the action
//   //^ payload -> data that is sent with the action
//   const { payload: actionPayload, type: actionType } = action
//   switch (action.type) {
//     case 'ADD_TO_CART': {
//       const { id } = actionPayload
//       const productInCartIndex = state.findIndex(item => item.id === action.payload.id)

//       if (productInCartIndex >= 0) {
//         //^ structuredClone -> It's a function that creates a deep copy of an object
//         const newState = structuredClone(state)
//         newState[productInCartIndex].quantity += 1
//         return newState
//       }

//       return [
//         ...state,
//         {
//           ...action.payload,
//           quantity: 1
//         }
//       ]
//     }

//     case 'REMOVE_FROM_CART': {
//       const { id } = actionPayload
//       return state.filter(item => item.id !== id)
//     }

//     case 'CLEAR_CART': {
//       return initialState
//     }
//   }
//   return state
// }

const UPDATE_STATE_BY_ACTION = {
  [CART_ACTION_TYPES.ADD_TO_CART]: (state, action) => {
    const { id } = action.payload
    const productInCartIndex = state.findIndex((item) => item.id === id)

    if (productInCartIndex >= 0) {
      const newState = [
        ...state.slice(0, productInCartIndex),
        {
          ...state[productInCartIndex],
          quantity: state[productInCartIndex].quantity + 1,
        },
        ...state.slice(productInCartIndex + 1),
      ]

      updateLocalStorage(newState)
      return newState
    }

    const newState = [
      ...state,
      {
        ...action.payload,
        quantity: 1,
      },
    ]

    updateLocalStorage(newState)
    return newState
  },
  [CART_ACTION_TYPES.REMOVE_FROM_CART]: (state, action) => {
    const { id } = action.payload
    const newState = state.filter((item) => item.id !== id)
    updateLocalStorage(newState)
    return newState
  },
  [CART_ACTION_TYPES.CLEAR_CART]: () => {
    updateLocalStorage([])
    return []
  },
}

export const cartReducer = (state, action) => {
  const { type: actionType } = action
  const updateState = UPDATE_STATE_BY_ACTION[actionType]
  return updateState ? updateState(state, action) : state
}
