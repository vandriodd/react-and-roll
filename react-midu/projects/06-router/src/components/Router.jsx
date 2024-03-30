import { EVENTS } from '../consts'
import { useEffect, useState, Children } from 'react'
import { match } from 'path-to-regexp'

const Router = ({
  routes = [],
  defaultComponent: DefaultComponent = () => null,
  children
}) => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)

  useEffect(() => {
    //! BAD
    //! we need store the function in a variable (had the same reference), so we can remove specific event listener
    // window.addEventListener(NAVIGATION_EVENT, () => {
    //   setCurrentPath(window.location.pathname)
    // })

    // return () => {
    //   window.removeEventListener(NAVIGATION_EVENT)
    // }

    //* GOOD
    const onNavigate = () => {
      setCurrentPath(window.location.pathname)
    }

    //^ Forward navigation
    window.addEventListener(EVENTS.PUSHSTATE, onNavigate)
    //^ Backward navigation
    window.addEventListener(EVENTS.POPSTATE, onNavigate)

    return () => {
      window.removeEventListener(EVENTS.PUSHSTATE, onNavigate)
      window.removeEventListener(EVENTS.POPSTATE, onNavigate)
    }
  }, [])

  let routeParams = {}

  // add routes from children <Route /> components
  const routesFromChildren = Children.map(children, ({ props, type }) => {
    const { name } = type
    const isRoute = name === 'Route'
    return isRoute ? props : null
  })

  const routesToUse = routes.concat(routesFromChildren).filter(Boolean)

  const Page = routesToUse.find(({ path }) => {
    if (path === currentPath) return true

    //^ Use path-to-regexp to detect dynamic routes
    // match returns a function that can be used to match a path
    // match(path, { decode })
    const matcherUrl = match(path, { decode: decodeURIComponent })
    const matched = matcherUrl(currentPath)
    if (!matched) return false

    routeParams = matched.params // "/search/javascript" -> { path: "/search/:query" } -> { query: "javascript" }
    return true
  })?.component

  return Page ? (
    <Page routeParams={routeParams} />
  ) : (
    <DefaultComponent routeParams={routeParams} />
  )
}

export default Router
