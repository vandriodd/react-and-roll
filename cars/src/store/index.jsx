import { configureStore } from '@reduxjs/toolkit'
import { carlistReducer, addCar, removeCar, changeTerm } from './slices/carlistSlice'
import { formReducer, changeName, changeCost } from './slices/formSlice'

const store = configureStore({
  reducer: {
    cars: carlistReducer,
    form: formReducer
  }
})

export { store, changeName, changeCost, addCar, removeCar, changeTerm }
