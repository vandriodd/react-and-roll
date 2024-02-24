import { createSlice, nanoid } from '@reduxjs/toolkit'

const carlistSlice = createSlice({
  name: 'cars',
  initialState: {
    searchTerm: '',
    data: []
  },
  reducers: {
    changeTerm: (state, action) => {
      state.searchTerm = action.payload
    },
    addCar: (state, action) => {
      // action.payload === { name: 'Car Name', cost: 1000}
      state.data.push({
        name: action.payload.name,
        cost: action.payload.cost,
        id: nanoid()
      })
    },
    removeCar: (state, action) => {
      // action.payload === 'id'
      const updatedCars = state.data.filter(car => car.id !== action.payload)
      state.data = updatedCars
    }
  }
})

export const { changeTerm, addCar, removeCar } = carlistSlice.actions
export const carlistReducer = carlistSlice.reducer
