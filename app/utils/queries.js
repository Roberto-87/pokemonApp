export default function queryGenerator (limit, idMax, from) {
  return `
query getPokemons {
  pokemon_v2_pokemon(limit: ${limit}, where: {id: {_lte: ${idMax}, _gt: ${from}}}) { 
    height
    id
    base_experience
    name
    weight
    pokemon_v2_pokemontypes{
      pokemon_v2_type{
        name
      }
    }
    pokemon_v2_pokemonstats {
      base_stat
      pokemon_v2_stat {
        name
      }
    }
    pokemon_v2_pokemonabilities{
      pokemon_v2_ability{
        name
      }
    }
  }
}
`
}
