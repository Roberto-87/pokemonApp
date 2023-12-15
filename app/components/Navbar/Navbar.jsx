'use client'
import React from 'react'
import Link from 'next/link'
import { IonLabel, IonSegment, IonSegmentButton, IonToolbar } from '@ionic/react'
import style from '../Navbar/Navbar.module.css'
import { pressStart2P } from '../../fonts/fonts'

function Navbar () {
  return (
    <header className={style.header}>
      <nav>
        <IonToolbar className={style.toolbar}>
          <IonSegment value='all' className={style.linksContainer}>
            <IonSegmentButton value='all' className={style.linkContainer}>
              <IonLabel className={pressStart2P.className}> <Link className={style.linkNavigation} href='/'> All </Link></IonLabel>
            </IonSegmentButton>
            {/*             <IonSegmentButton value='favorites' className={style.linkContainer}>
                            <IonLabel className={pressStart2P.className}> <Link className={style.linkNavigation} href='/favorites'> Favs </Link></IonLabel>
                          </IonSegmentButton> */}
          </IonSegment>
        </IonToolbar>
        {/*     <SearchBar /> */}
      </nav>
    </header>
  )
}
export default Navbar
