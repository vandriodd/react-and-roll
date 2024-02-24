import CarForm from './components/CarForm'
import CarList from './components/CarList'
import CarSearch from './components/CarSearch'
import CarValue from './components/CarValue'

const App = () => {
  return (
    <>
      <header className='container is-fluid'>
        <h1>Cars App</h1>
      </header>
      <main className='container is-fluid'>
        <CarForm />
        <CarSearch />
        <CarList />
        <CarValue />
      </main>
    </>
  )
}

export default App
