import HomePage from './pages/Home'
import AboutPage from './pages/About'
import Router from './Router'
import Page404 from './pages/404'

const appRoutes = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/about',
    component: AboutPage,
  }
]

const App = () => {
  return (
    <main>
      <Router routes={appRoutes} defaultComponent={Page404} />
    </main>
  )
}

export default App
