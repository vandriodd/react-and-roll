import { useState } from "react"

const HomePage = () => {
  return (
    <>
      <h1>Home</h1>
      <p>Welcome to the Home page</p>
      <a href='/about'>About Us</a>
    </>
  )
}

const AboutPage = () => {
  return (
    <>
      <h1>About</h1>
      <p>Welcome to the About page</p>
      <a href='/'>Home</a>
    </>
  )
}

const App = () => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)

  return (
    <main>
      {currentPath === '/' && <HomePage />}
      {currentPath === '/about' && <AboutPage />}
    </main>
  )
}

export default App
