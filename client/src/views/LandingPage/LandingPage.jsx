import styles from './LandingPage.module.scss';
import logoPokemon from '../../assets/logoPokemon.png';
import charmeleon from '../../assets/pokemons/charmeleon.png';
import pikachu from '../../assets/pokemons/pikachu.png';

import { Link } from 'react-router-dom';

const LandingPage = () => {
    return (
        <main>
            <img src={logoPokemon} alt="logo de pokemon" title='logo de pokemon' className={styles.logoImg} />
            <img src={charmeleon} alt="pokemon charmeleon" title='charmelon' className={styles.charmeleonImg} />
            <img src={pikachu} alt="pokemon pikachu" title='pikachu' className={styles.pikachuImg} />

            <Link to='/home'>
                <span className={styles.homeBtn}>
                    Go home
                </span>
            </Link>
        </main>
    )
}

export default LandingPage;