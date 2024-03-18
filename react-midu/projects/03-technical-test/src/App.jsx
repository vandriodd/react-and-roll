import { useEffect, useState } from 'react'
import './App.css'

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'

export const App = () => {
  const [fact, setFact] = useState()
  const [imageUrl, setImageUrl] = useState()
  const [factError, setFactError] = useState()

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
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then(res => {
        if (!res.ok) {
          setFactError('Failed to fetch')
          throw new Error(factError)
        }
        return res.json()
      })
      .then(data => {
        const { fact } = data
        setFact(fact)
      })
  }, [])

  useEffect(() => {
    if (!fact) return

    const firstWords = fact.split(' ', 3).join(' ')
    setImageUrl(`https://cataas.com/cat/says/${firstWords}`)
  }, [fact])

  return (
    <main>
      <h1>App of cats</h1>
      {fact && <p>{fact}</p>}
      {imageUrl && <img src={imageUrl} alt={`Image result of fact ${fact}`} />}
    </main>
  )
}
