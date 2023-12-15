import brand from '../../assets/PokemonImage.png'
import Link from 'next/link'

const Brand = () => {
  return (
    <Link href='/'>
      <img width={180} style={{imageRendering: 'pixelated' }} src={brand.src} alt="Logo Pokemon" />
    </Link>

  )
}

export default Brand
