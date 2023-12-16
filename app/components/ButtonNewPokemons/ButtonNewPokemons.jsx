import { IoIosArrowUp } from "react-icons/io";
import { IonButton } from "@ionic/react";
import style from './ButtonNewPokemons.module.css'
import { pressStart2P } from '../../fonts/fonts'

const ButtonNewPokemons= ({onHandleClick}) => {
    return (
     <div className={style.moreButtonContainer}>
         <span className={style.moreSpanContainer}><p onClick={onHandleClick} className={pressStart2P.className}>Show More <IoIosArrowUp /></p></span>
     </div>
    )
}

export default ButtonNewPokemons
