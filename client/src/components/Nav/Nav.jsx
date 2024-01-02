import styles from './Nav.module.scss';

import SearchBar from "../SearchBar/SearchBar";

import { Link } from "react-router-dom";

import logoPokemon from '../../assets/logoPokemon.png'

const Nav = () => {
    return (
        <nav>
            <Link to='/home'> Home </Link>
            <Link to='/pokemon'> Create Pokemon </Link>
            <Link to='/about'> About Me </Link>

            <img src={logoPokemon} className={styles.img} title='logo de pokemon' alt='logo de pokemon' />

            <SearchBar/>
        </nav>
    )
}

export default Nav;