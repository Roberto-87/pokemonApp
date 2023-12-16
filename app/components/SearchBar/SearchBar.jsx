'use client'
import { getOnePokemonByName } from '@/app/utils/dataFetching'
import style from './SearchBar.module.css'
import { useEffect, useState } from 'react'
import { validationStr } from '@/app/utils/functions'
import Card from '../Card/Card'

const SearchBar = () => {
  const [name, setName] = useState('')
  const [pokemon, setPokemon] = useState([])
  const [error, setError] = useState(false)

  const sendData = async () => {
    try {
      const response = await getOnePokemonByName(name)
      if (response && response.pokemon_v2_pokemon) {
        setPokemon([...response.pokemon_v2_pokemon])
        console.log('api response search similar', response)
      }
    } catch (error) {
      console.error('Error fetching data:', error)
      throw new Error('fetch error', error)
    }
  }

  const onHandleChange = (e) => {
    const name = e.target.value
    setName(name)
  }
  useEffect(() => {
    validationStr(name) ? sendData() : setError(true)
  }, [name])

  return (
    <>
      <section className={style.searchbarContainer}>
        <input placeholder='Search a Pokemon' onChange={onHandleChange} name='name' value={name} type='text' />
      </section>
      {pokemon && name && <Card pokemonData={pokemon} />}
    </>

  )
}

export default SearchBar
