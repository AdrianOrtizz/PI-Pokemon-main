import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { handleChange, handleSearch, handleKey, handleRedirect } from "./searchBarHandlers";

const SearchBar = () => {

    const [ pokemonSerchead, setPokemonSerchead ] = useState('');
    const searchPokemon = useSelector(state => state.searchPokemon);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handlersTools = {
        pokemonSerchead,
        setPokemonSerchead,
        searchPokemon,
        dispatch,
        navigate,
    }

    useEffect(() => {
        // solo se redirecciona al usuario cuando searchPokemon tiene
        // un pokemon para mostar
        if(Object.keys(searchPokemon).length !== 0){
            handleRedirect(handlersTools);
        }
    }, [searchPokemon])

    return (
        <div>
            <input 
                type="text"
                placeholder="Search pokemons!"
                value={pokemonSerchead}
                onChange={() => handleChange(event, handlersTools)} 
                onKeyDown={() => handleKey(event, handlersTools)}
            />

            <button onClick={() => handleSearch(handlersTools)}>
                🔍
            </button>
        </div>
    )
}

export default SearchBar;