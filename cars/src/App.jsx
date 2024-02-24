import CarForm from "./components/CarForm"
import CarList  from "./components/CarList"
import CarSearch  from "./components/CarSearch"
import CarValue  from "./components/CarValue"

const App = () => {
  return (
    <>
      <header>
        <h1>Cars App</h1>
      </header>
      <main>
        <CarForm />
        <CarSearch />
        <CarList />
        <CarValue />
      </main>
    </>
  )
}

export default App
