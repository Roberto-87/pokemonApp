import Card from '../Card/Card'
import { IonCol, IonGrid, IonCardHeader, IonCardSubtitle, IonRow } from '@ionic/react'
import style from './CardDetail.module.css'

const CardDetail = ({ pokemonData }) => {
  return (
    <IonGrid>
      <IonRow>
        <IonCol className={style.cardContainer} size='12' size-md='12' sizeXl='12' size-lg='6'><br />
          <Card pokemonData={pokemonData} />
        </IonCol>
      </IonRow>
      {pokemonData && pokemonData.map(({ id, pokemon_v2_pokemonstats}) =>
        <IonCol size='12' size-md='3' sizeXl='12' size-lg='6' key={id}><br />
          <IonCardHeader className={style.statContainer}>
            <IonCardSubtitle>{pokemon_v2_pokemonstats.map((stat, index) =>
              <ul className={style.statBox} key={index}>
                {stat.base_stat < 61 && <li>{stat.pokemon_v2_stat.name} <span style={{ color: 'red' }}>{'>'.repeat((parseInt(stat.base_stat) / 10))}</span> </li>}
                {stat.base_stat > 60 && stat.base_stat < 91 && <li>{stat.pokemon_v2_stat.name} <span style={{ color: 'yellow' }}> {'>'.repeat((parseInt(stat.base_stat) / 10))}</span>  </li>}
                {stat.base_stat > 91 && <li>{stat.pokemon_v2_stat.name} <span style={{ color: 'green' }}> {'>'.repeat((parseInt(stat.base_stat) / 10))} </span> </li>}
              </ul>

            )}
            </IonCardSubtitle>
          </IonCardHeader>
        </IonCol>
      )}
    </IonGrid>
  )
}
export default CardDetail
