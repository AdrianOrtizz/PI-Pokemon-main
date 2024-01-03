import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { searchPokemon, resetState } from "../../redux/actions/actions";

const SearchBar = () => {

    const [ pokemonSerchead, setPokemonSerchead ] = useState('');
    const pokemonDetail = useSelector(state => state.pokemonDetail);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    // useEffect(() => {
    //     handleRedirect(pokemonDetail);
    // }, [pokemonDetail])

    const handleDispatch = async () => {
        dispatch(searchPokemon(pokemonSerchead))   
    }

    const handleChange = (event) => {
        setPokemonSerchead(event.target.value);
    }

    const handleSearch = async () => {
        try {
            if(/^[a-zA-Z\s]+$/.test(pokemonSerchead)){
                handleDispatch()
                navigate(`/pokemons/${pokemonDetail.id}`)
                setPokemonSerchead('');                
            }else{
                alert('Only letters');
                
            }
        } catch (error) {
            alert('pokemon not found');
        }
    }

    const handleKey = (event) => {
        if(event.key === 'Enter'){
            handleSearch(pokemonSerchead)
        }
    }

    return (
        <div>
            <input 
                type="text"
                placeholder="Search pokemons!"
                value={pokemonSerchead}
                onChange={handleChange} 
                onKeyDown={handleKey}
            />

            <button onClick={handleSearch}>
                🔍
            </button>
        </div>
    )
}

export default SearchBar;