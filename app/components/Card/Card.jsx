'use client'
import React from 'react'
import { IonGrid, IonRow, IonCol, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react'
import style from './Card.modules.css'
import Link from 'next/link'
import { toUpperCaseLetter } from '@/app/utils/functions'

function Card ({ pokemonData }) {
  return (
    <>
      <IonGrid className={style.cardContainer}>
        <IonRow>
          {pokemonData && pokemonData.map(({ id, name, height, base_experience, weight, pokemon_v2_pokemonabilities, pokemon_v2_pokemontypes}) =>
            <IonCol size-md='6 ' size-xl='4' key={id}><br />
              <IonCardHeader>
                <Link href='/[id]' as={`/${name}`}>
                  <IonCardTitle><h2 style={{ color:'#ffcc03'}}>{toUpperCaseLetter(name)}</h2></IonCardTitle>
                </Link>
                <IonCardSubtitle>Type:{pokemon_v2_pokemontypes.map((type) => type.pokemon_v2_type.name)}</IonCardSubtitle>
              </IonCardHeader>
              <IonCardContent>
                <ul>
                  <li>Base experience: {base_experience}</li>
                  <li>Height: {height}</li>
                  <li>Weight: {weight}</li>
                  <li>Abilities: {pokemon_v2_pokemonabilities.map((ability, index) => <p key={index}>{ability.pokemon_v2_ability.name}</p>)}</li>
                </ul>
              </IonCardContent>
            </IonCol>
          )}
        </IonRow>
      </IonGrid>
    </>
  )
}

export default Card
