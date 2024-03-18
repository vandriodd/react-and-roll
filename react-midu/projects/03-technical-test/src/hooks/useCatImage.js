import { useEffect, useState } from 'react'

export const useCatImage = ({ fact }) => {
  const [imageUrl, setImageUrl] = useState()

  useEffect(() => {
    if (!fact) return

    const firstWords = fact.split(' ', 3).join(' ')
    setImageUrl(`https://cataas.com/cat/says/${firstWords}`)
  }, [fact])

  return { imageUrl }
}
