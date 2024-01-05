import styles from './Nav.module.scss';


import { Link } from "react-router-dom";

import logoPokemon from '../../assets/logoPokemon.png'

const Nav = () => {
    return (
        <nav>
            <Link to='/home/1'> Home </Link>
            <Link to='/create'> Create Pokemon </Link>
            <Link to='/about'> About Me </Link>
            <Link to='/home/1'> <img src={logoPokemon} className={styles.img} title='logo de pokemon' alt='logo de pokemon' /> </Link>
            
        </nav>
    )
}

export default Nav;