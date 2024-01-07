import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { handleChange, handleSearch, handleKey, handleRedirect } from "./searchBarHandlers";

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