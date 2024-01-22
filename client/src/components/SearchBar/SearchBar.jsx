import styles from './SearchBar.module.scss'

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { handleChange, handleSearch, handleKey, handleRedirect, handleRandom } from "./searchBarHandlers";

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

            <div className={styles.inputContainer}>
                <input 
                    type="text"
                    placeholder="Search pokemon!"
                    value={pokemonSerchead}
                    onChange={() => handleChange(event, handlersTools)} 
                    onKeyDown={() => handleKey(event, handlersTools)}
                    className={styles.input}
                />

                <span onClick={() => handleSearch(handlersTools)} className={styles.btn}>
                    🔍
                </span>

            </div>

        </div>
    )
}

export default SearchBar;