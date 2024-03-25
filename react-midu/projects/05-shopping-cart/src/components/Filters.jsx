import './Filters.css'
import { useState, useId } from 'react'

const Filters = ({ changeFilters }) => {
  const [minPrice, setMinPrice] = useState(0)
  const minPriceFilterId = useId()
  const categoryFilterId = useId()

  const handleChangeMinPrice = (e) => {
    //! Here something is bad
    // 2 sources of truth
    setMinPrice(e.target.value)
    changeFilters((prevState) => ({
      ...prevState,
      minPrice: e.target.value,
    }))
  }

  const handleChangeCategory = (e) => {
    //! Here something is bad too
    // We pass React's native state update function to a child component
    // The contract that changeFilters awaits is the state
    changeFilters((prevState) => ({
      ...prevState,
      category: e.target.value,
    }))
  }

  return (
    <section className='filters'>
      <div>
        <label htmlFor='price'>Price</label>
        <input
          type='range'
          id={minPriceFilterId}
          min='0'
          max='1000'
          onChange={handleChangeMinPrice}
        />
        <span>${minPrice}</span>
      </div>
      <div>
        <label htmlFor='category'>Category</label>
        <select id={categoryFilterId} onChange={handleChangeCategory}>
          <option value='all'>All</option>
          <option value='laptops'>Laptops</option>
          <option value='smartphones'>Smartphones</option>
        </select>
      </div>
    </section>
  )
}

export default Filters
