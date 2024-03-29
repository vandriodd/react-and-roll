import { EVENTS } from './consts'
import { useEffect, useState } from 'react'

const Router = ({
  routes = [],
  defaultComponent: DefaultComponent = () => null,
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

  const Page = routes.find(({ path }) => path === currentPath)?.component
  return Page ? <Page /> : <DefaultComponent />
}

export default Router
