'use client'
import { getOnePokemonByName } from '@/app/utils/dataFetching'
import style from './SearchBar.module.css'
import { useEffect, useState } from 'react'

const SearchBar = () => {
  const [name, setName] = useState('')
  const [pokemon, setPokemon] = useState([])

  const onHandleChange = (e) => {
    setName(e.target.value)
  }

  const sendData = async () => {
    try {
      const response = await getOnePokemonByName(name)
      if (response && response.pokemon_v2_pokemon) {
        setPokemon([...response.pokemon_v2_pokemon])
        console.log(response)
      }
    } catch (error) {
      console.error('Error fetching data:', error)
      throw new Error('fetch error', error)
    }
  }
  sendData()

  useEffect(() => {
    sendData()
    console.log(pokemon)
  }, [name])

  return (
    <section className={style.searchbarContainer}>
      <input placeholder='Search a Pokemon' onChange={onHandleChange} name='name' value={name} type='text' />
    </section>

  )
}

export default SearchBar
