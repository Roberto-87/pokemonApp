'use client'
import React from 'react'
import { IonGrid, IonRow, IonCard, IonCol, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react'
import style from './Card.modules.css'
import Link from 'next/link'
import { toUpperCaseLetter } from '@/app/utils/functions'
import { MdOutlineCatchingPokemon } from 'react-icons/md'

function Card ({ pokemonData }) {
  return (
    <div className={style.cardContainer}>
      <IonGrid>
        <IonRow>
          {pokemonData && pokemonData.map(({ id, name, height, base_experience, weight, pokemon_v2_pokemonabilities, pokemon_v2_pokemontypes }) =>
            <IonCol size-md={pokemonData.length > 1 ? '6' : '12'} sizeLg='6' size-xl={pokemonData.length > 1 ? '4' : '12'} key={id}><br />
              <IonCard>
                <img style={{ width: '12vw', imageRendering: 'pixelated' }} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt={name} />
                <IonCardHeader>
                  <Link href='/[id]' as={`/${id}`}>
                    <IonCardTitle><h2 style={{ color: '#ffcd05', letterSpacing: '1.2px' }}>{toUpperCaseLetter(name)}</h2></IonCardTitle>
                  </Link>
                  <IonCardSubtitle style={{ lineHeight: '1.5' }}>Type:{pokemon_v2_pokemontypes.map((type) => type.pokemon_v2_type.name)}</IonCardSubtitle>
                </IonCardHeader>
                <IonCardContent>
                  <ul>
                    <li><span style={{ lineHeight: '1.5' }}>Base experience:</span> {base_experience}</li>
                    <li><span style={{ lineHeight: '1.5' }}> Height:  </span>{height}</li>
                    <li style={{ lineHeight: '1.5' }}>Weight: {weight}</li><br />
                    <li><span style={{ color: '#fa6b58' }}>Abilities:</span>{pokemon_v2_pokemonabilities.map((ability, index) => <p key={index} style={{ lineHeight: '1.3' }}><MdOutlineCatchingPokemon /> {ability.pokemon_v2_ability.name}</p>)}</li>
                  </ul>{/* '#860202' '#9e00f4'#9d5353 #fa6b58  */}
                </IonCardContent>
              </IonCard>
            </IonCol>
          )}
        </IonRow>
      </IonGrid>
    </div>
  )
}

export default Card
