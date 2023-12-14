import { toUpperCaseLetter } from "../utils/functions"

const PokemonDetail = ({ params }) => {
  const { id } = params

  return (
    <div>
      <h1 style={{ color:'#ffcc03'}}>{toUpperCaseLetter(id)}</h1>
    </div>
  )
}

export default PokemonDetail
