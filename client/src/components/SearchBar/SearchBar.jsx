import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { handleChange, handleSearch, handleKey, handleRedirect, handleRandom } from "./searchBarHandlers";

import styles from './SearchBar.module.scss'

const SearchBar = () => {

    const [ pokemonSerchead, setPokemonSerchead ] = useState('');
    const pokemonDetail = useSelector(state => state.pokemonDetail);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handlersTools = {
        pokemonSerchead,
        setPokemonSerchead,
        pokemonDetail,
        dispatch,
        navigate
    }

    useEffect(() => {
        handleRedirect(handlersTools)
    }, [pokemonDetail])

    return (
        <div className={styles.searchBarContainer}>

            <span 
                onClick={() => handleRandom(handlersTools)}
                className={styles.randomBtn}
            >
                Random Pokemon!
            </span>

            <input 
                type="text"
                placeholder="Search pokemons!"
                value={pokemonSerchead}
                onChange={() => handleChange(event, handlersTools)} 
                onKeyDown={() => handleKey(event, handlersTools)}
                className={styles.input}
            />

            <span onClick={() => handleSearch(handlersTools)} className={styles.btn}>
                🔍
            </span>
        </div>
    )
}

export default SearchBar;