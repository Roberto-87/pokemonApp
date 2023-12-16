import { LoadPokemons } from './components/LoadPokemons/LoadPokemons'
import SearchBar from './components/SearchBar/SearchBar'

const Home = async () => {
  return (
    <> 
      <SearchBar />
      <LoadPokemons />
    </>
  )
}

export default Home
