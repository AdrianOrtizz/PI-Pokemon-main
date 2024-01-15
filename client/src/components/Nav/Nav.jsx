import styles from './Nav.module.scss';


import { Link } from "react-router-dom";

import logoPokemon from '../../assets/logoPokemon.png'

const Nav = () => {
    return (
        <nav>
            <Link to='/home/1' className={styles.link}> <span className={styles.btn} > Home </span> </Link>
            <Link to='/create' className={styles.link}> <span className={styles.btn} > Create Pokemon </span> </Link>
            <Link to='/home/1' className={styles.imgLink}> <img src={logoPokemon} className={styles.img} title='logo de pokemon' alt='logo de pokemon' /> </Link>
        </nav>
    )
}

export default Nav;