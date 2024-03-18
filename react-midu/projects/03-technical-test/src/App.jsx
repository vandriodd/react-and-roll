import { useEffect } from 'react'
import './App.css'
import { getRandomFact } from './services/facts'
import { useCatImage } from './hooks/useCatImage'
import { useCatFact } from './hooks/useCatFact'

export const App = () => {
  const { fact, refreshFact } = useCatFact()
  const { imageUrl } = useCatImage({ fact })

  // ^ For doing a fetch, we need to use useEffect, to tell React to do something after the component is mounted, not everytime it's rendered
  //* TIP: when we write useEffect, put the dependencies FIRST inside the parenthesis, to avoid forgetting them
  //! useEffect always be a sync function, so if we need do async stuff, we need to do inside the function, like:

  // useEffect(() => {
  //   async function getRandomFact () {
  //     const res = await fetch(CAT_ENDPOINT_RANDOM_FACT)
  //     const json = await res.json()
  //     setFact(json.fact)
  //   }
  //   getRandomFact()
  // }, [])

  useEffect(() => {
    getRandomFact()
  }, [])

  const handleClick = async () => {
    refreshFact()
  }

  return (
    <main>
      <h1>App of cats</h1>
      <button onClick={handleClick}>Get new fact</button>
      {fact && <p>{fact}</p>}
      {imageUrl && <img src={imageUrl} alt={`Image result of fact ${fact}`} />}
    </main>
  )
}
