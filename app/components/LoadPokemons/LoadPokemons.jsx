'use client'
import { useState, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import Loading from '../../loading'
import { dataFetch } from '@/app/utils/dataFetching'
import { limit } from '@/app/utils/const'
import Card from '../Card/Card'
import ButtonNewPokemons from '../ButtonNewPokemons/ButtonNewPokemons'

export const LoadPokemons = () => {
  const [pokemons, setPokemons] = useState([])
  const [scrolling, setScrolling] = useState(false);
  const [actScrollY, setActScrollY] = useState(0);
  const { ref, inView } = useInView()

  const loadMorePokemons = async () => {
    const { pokemon_v2_pokemon } = await dataFetch(limit)
    setPokemons(pokemons => [...pokemons || [], ...pokemon_v2_pokemon])
  }
  const loadMorePokemonsStart = async () => {
    const { pokemon_v2_pokemon } = await dataFetch(limit)
    setPokemons(pokemons => [...pokemon_v2_pokemon, ...pokemons || []])
    window.scrollTo({
      top:1,
      behavior: 'smooth', 
    });
  }

  const handleScroll = async() => {
    setScrolling(true)
    const currentScrollY = window.scrollY;
    setActScrollY(currentScrollY)
     if(currentScrollY <1 ) {
        loadMorePokemonsStart()      
         setScrolling(true);
        setScrolling(false);
     }
    
 } 
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
    
  }, [scrolling]);


  useEffect(() => {
    if (inView) {
      loadMorePokemons()
    }
  }, [inView])

  return (
    <>
      {scrolling && actScrollY > 1 && <ButtonNewPokemons onHandleClick={loadMorePokemonsStart} />}
      <Card pokemonData={pokemons} />
      <div ref={ref}>
        <Loading />
      </div>
    </>
  )
}
