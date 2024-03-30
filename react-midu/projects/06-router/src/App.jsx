/* ------------------------------ Static import ----------------------------- */
import { lazy, Suspense } from 'react'
import Router from './components/Router'
import Route from './components/Route'
import Page404 from './pages/404'
import SearchPage from './pages/Search'

/* ----------------------------- Dynamic import ----------------------------- */
const HomePage = lazy(() => import('./pages/Home'))
const AboutPage = lazy(() => import('./pages/About'))

const appRoutes = [
  {
    path: '/:lang/about',
    component: AboutPage
  },
  {
    path: '/search/:query',
    component: SearchPage,
  },
]

const App = () => {
  return (
    <main>
      <Suspense fallback={'Loading...'}>
        <Router routes={appRoutes} defaultComponent={Page404}>
          <Route path='/' component={HomePage} />
          <Route path='/about' component={AboutPage} />
        </Router>
      </Suspense>
    </main>
  )
}

export default App
