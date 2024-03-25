import { useCart } from '../hooks/useCart'
import { useFilters } from '../hooks/useFilters'
import './Footer.css'

const Footer = () => {
  const { filters } = useFilters()
  const { cart } = useCart()

  return (
    <footer className='footer'>
      {
        JSON.stringify(filters, null, 2)
      }
      &nbsp;
      {
        JSON.stringify(cart, null, 2)
      }
    </footer>
  )
}

export default Footer
