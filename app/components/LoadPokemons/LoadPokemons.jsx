'use client'
import { useState, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import Loading from '../../loading'
import { dataFetch } from '@/app/utils/dataFetching'
import { limit } from '@/app/utils/const'
import Card from '../Card/Card'

export const LoadPokemons = () => {
  const [pokemons, setPokemons] = useState([])

  const { ref, inView } = useInView()

  const loadMorePokemons = async () => {
    const { pokemon_v2_pokemon } = await dataFetch(limit)
    setPokemons(pokemons => [...pokemons || [], ...pokemon_v2_pokemon])
  }

  useEffect(() => {
    if (inView) {
      loadMorePokemons()
    }
  }, [inView])

  return (
    <>
      <Card pokemonData={pokemons} />
      <div ref={ref}>
        <Loading />
      </div>
    </>
  )
}
