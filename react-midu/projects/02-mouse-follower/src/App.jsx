import { useEffect, useState } from 'react'
import './App.css'

const FollowMouse = () => {
  const [enabled, setEnabled] = useState(false)
  //^ GOOD PRACTICE
  // Always initialize the state with the same type of data that it will have
  const [position, setPosition] = useState({ x: 0, y: 0 })

  // We don´t do this, because it will create a new event listener every time the component renders
  // window.addEventListener()
  // We need control when we suscribe and unsuscribe to the event

  useEffect(() => {
    const handleMove = (e) => {
      const { clientX, clientY } = e
      setPosition({ x: clientX, y: clientY })
    }

    //! Logic of the effect always goes outside of any type of condition
    // but, this if statement is necessary to avoid adding the event listener when the component is mounted, it's correct
    if (enabled) window.addEventListener('pointermove', handleMove)

    //! Suscribes must be cleaned up
    // This is the cleanup function, it will be called when:

    // [] -> the component is unmounted
    // [enabled] -> the component is mounted or the value of enabled changes
    // undefined -> everytime the component is re-rendered
    return () => {
      window.removeEventListener('pointermove', handleMove)
    }
  }, [enabled])

  //! document doesn't exist in the server, so it's a bad practice using it in the body of the component, we should use it in the effect

  return (
    <>
      <div
        style={{
          position: 'absolute',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          border: '1px solid #fff',
          borderRadius: '50%',
          opacity: 0.8,
          pointerEvents: 'none',
          left: -25,
          top: -25,
          width: 50,
          height: 50,
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
      />
      <button onClick={() => setEnabled(!enabled)}>
        {enabled ? 'Disable' : 'Enable'} mouse follower
      </button>
    </>
  )
}

function App() {
  const [mounted, setMounted] = useState(true)

  return <main>
    { mounted && <FollowMouse /> }
    <button onClick={() => setMounted(!mounted)}>
      Toggle mounted FollowMouse component
    </button>
  </main>
}

export default App
