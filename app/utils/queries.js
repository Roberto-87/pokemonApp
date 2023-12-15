export function queryGenerator (limit, idMax, from) {
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
export function getRandomPokemons (limit) {
  const randomNumbers = JSON.stringify(Array.from({ length: 20 }, () => Math.ceil(Math.random() * 898)))

  return `
query getPokemons {
  pokemon_v2_pokemon(limit: ${limit}, where: {id: { _in:${randomNumbers}}}) { 
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

export function getOnePokemon (id) {
  return `
query getPokemons {
  pokemon_v2_pokemon(where: {id: {_eq: ${id}}}) { 
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
