import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { searchPokemon } from "../../redux/actions/actions";

const SearchBar = () => {

    const [ pokemon, setPokemon ] = useState('');

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const pokemonDetail = useSelector(state => state.pokemonDetail);
    
    const handleChange = (event) => {
        setPokemon(event.target.value);
    }
    
    const handleSearch = (pokemon) => {
        try {
            dispatch(searchPokemon(pokemon))
            setPokemon('');
            
            navigate(`/pokemons/${pokemonDetail}`)
            
        } catch (error) {
            throw Error(error.message)
        }
    }

    const handleKey = (event) => {
        if(event.key === 'Enter'){
            handleSearch(pokemon)
        }
    }

    return (
        <div>
            <input 
                type="text"
                placeholder="Search pokemons!"
                value={pokemon}
                onChange={handleChange} 
                onKeyDown={handleKey}/>
            <button
            onClick={() => handleSearch(pokemon)}
            >
                🔍
            </button>
        </div>
    )
}

export default SearchBar;