import { useFilters } from '../hooks/useFilters'
import { useId } from 'react'
import './Filters.css'

const Filters = () => {
  const { filters, setFilters } = useFilters()
  // const [minPrice, setMinPrice] = useState(0) // locale state
  const minPriceFilterId = useId()
  const categoryFilterId = useId()

  const handleChangeMinPrice = (e) => {
    //! Here something is bad
    // 2 sources of truth
    // We have a local state and a global state
    // We should have only one source of truth
    //* To solve this we should remove the local state and use the global state
    // setMinPrice(e.target.value)
    setFilters((prevState) => ({
      ...prevState,
      minPrice: e.target.value,
    }))
  }

  const handleChangeCategory = (e) => {
    //! Here something is bad too
    // We pass React's native state update function to a child component
    // The contract that changeFilters awaits is the state
    setFilters((prevState) => ({
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
          value={filters.minPrice}
        />
        <span>${filters.minPrice}</span>
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
