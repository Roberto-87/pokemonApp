'use client'
import { IonSearchbar } from '@ionic/react'
import style from './SearchBar.module.css'

const SearchBar = () => {
  return (
    <section className={style.searchbarContainer}>
      <IonSearchbar color='tertiary' placeholder='Search' className={style.searchbar} />
    </section>

  )
}

export default SearchBar
