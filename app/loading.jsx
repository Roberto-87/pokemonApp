import { CgPokemon } from 'react-icons/cg'
import style from './loading.module.css'

export default function Loading () {
  return (
    <div className={style.loaderContainer}>
      <CgPokemon className={style.loader} />
    </div>
  )
}
