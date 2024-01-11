import styles from './LandingPage.module.scss';
import logoPokemon from '../../assets/logoPokemon.png';
import charmeleon from '../../assets/pokemons/charmeleon.png';
import pelipper from '../../assets/pokemons/pelipper.png';
import ditto from '../../assets/pokemons/ditto.png'
import dialga from '../../assets/pokemons/Dialga.png'
import goHome from '../../assets/goHome.png'

import { Link } from 'react-router-dom';

const LandingPage = () => {

    return (
        <main>
            <img src={logoPokemon} alt="logo de pokemon" title='logo de pokemon' className={styles.logoImg} />
            <img src={charmeleon} alt="pokemon charmeleon" title='charmelon' className={styles.charmeleonImg} />
            <img src={pelipper} alt="pokemon pelipper" title='pelipper' className={styles.pelipperImg} />
            <img src={ditto} alt="pokemon ditto" title='ditto' className={styles.dittoImg} />
            <img src={dialga} alt="pokemon dialga" title='dialga' className={styles.dialgaImg} />

            <Link to='/home/1'>
                <img src={goHome} alt="go home button" title='home button' className={styles.homeBtn} />
            </Link>
        </main>
    )
}

export default LandingPage;