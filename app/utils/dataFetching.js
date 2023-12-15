'use server'
import { URLPOKEAPI } from './const'
import { getRandomPokemons, getOnePokemon } from './queries'

export const dataFetch = async (limit, idMaxNextBatch, floorId) => {
  try {
    return await fetch(URLPOKEAPI, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: getRandomPokemons(limit)
      })
    }).then(res => res.json()).then(res => (((res.data))))
  } catch (error) {
    throw new Error(`Error fetching the data ${error}`)
  }
}

export const getOnePokemonData = async (id) => {
  try {
    return await fetch(URLPOKEAPI, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: getOnePokemon(id)
      })
    }).then(res => res.json()).then(res => (((res.data))))
  } catch (error) {
    throw new Error(`Error fetching the data ${error}`)
  }
}
