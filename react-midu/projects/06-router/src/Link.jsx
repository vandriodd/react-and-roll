import { EVENTS, BUTTONS } from './consts'

export const navigate = (href) => {
  //^ Change URL
  // window.history -> The history property of the Window interface allow us to navigate the session history of the browser.
  window.history.pushState(null, null, href)

  //^ Create custom event
  const navigationEvent = new Event(EVENTS.PUSHSTATE)

  //^ Dispatch custom event
  window.dispatchEvent(navigationEvent)
}

export const Link = ({ target, to, ...props}) => {
  const handleClick = (e) => {
    const isMainEvent = e.button === BUTTONS.primary
    const isModifiedEvent = e.metaKey || e.ctrlKey || e.shiftKey || e.altKey
    const isManageableEvent = target === undefined || target === '_self'

    if (isMainEvent && isManageableEvent && !isModifiedEvent) {
      e.preventDefault()
      navigate(to) // -> navigation with SPA
    }
  }

  return (
    <a onClick={handleClick} href={to} target={target} {...props} />
  )
}
