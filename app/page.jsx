import Card from './components/Card/Card'
import { dataFetch } from './utils/dataFetching'
import { limit, idMax, from } from './utils/const'
import { returnARandomNumber } from './utils/functions'
import { LoadMore } from './components/LoadMore/LoadMore'

const Home = async () => {
  const {pokemon_v2_pokemon } = await dataFetch(limit, idMax, from)

  return (
    <>
      <Card pokemonData={pokemon_v2_pokemon}/>
      <LoadMore />
    </>
  )
}

export default Home
