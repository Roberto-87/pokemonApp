'use client'
import CardDetail from '../components/CardDetail/CardDetail'
import { useState, useEffect } from 'react'
import { getOnePokemonData } from '../utils/dataFetching'

const PokemonDetail = ({ params }) => {
  const { id } = params
  const [pokemon, setPokemon] = useState()

  const loadPokemon = async () => {
    const { pokemon_v2_pokemon } = await getOnePokemonData(id)
    setPokemon([...pokemon_v2_pokemon])
  }

  useEffect(() => {
    loadPokemon()
  }, [])

  return (
    <main>
      <CardDetail pokemonData={pokemon} />
    </main>
  )
}

export default PokemonDetail
