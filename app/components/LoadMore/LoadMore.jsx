'use client'
import { useState, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import Loading from '../../loading'
import { dataFetch } from '@/app/utils/dataFetching'
import { limit, idMax, from } from '@/app/utils/const'
import Card from '../Card/Card'

export const LoadMore = () => {
  const [pokemons, setPokemons] = useState([])
  const [idMaxNextBatch, setidMaxNextBatch]= useState(idMax)
  const [floorId, setFloorId]= useState(from)
  const [fetched, setFetched]= useState(false)

  const { ref, inView } = useInView()

  const loadMorePokemons = async () => {
    const nextBatch = idMaxNextBatch + 20
    const nextFloor = floorId + 20
    const { pokemon_v2_pokemon } = await dataFetch(limit, nextBatch, nextFloor)
    setPokemons(pokemons => [...(pokemons || []), ...pokemon_v2_pokemon])
    setidMaxNextBatch(nextBatch)
    setFloorId(nextFloor)
    setFetched(true)
  }

  useEffect(() => {
    if (inView) {
      setFetched(false)
      loadMorePokemons()
    }
  }, [inView])

  return (
    <>
      <Card pokemonData={pokemons} />
      <div ref={ref}>
        {!fetched && <Loading />}
      </div>

    </>
  )
}
