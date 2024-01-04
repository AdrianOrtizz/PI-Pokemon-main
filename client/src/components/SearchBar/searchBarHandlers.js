import { searchPokemon, resetState } from "../../redux/actions/actions";

const regex = /^[a-zA-Z\s]+$/

export const handleChange = (event, { setPokemonSerchead } ) => {
    setPokemonSerchead(event.target.value);
}

export const handleSearch = async ( { pokemonSerchead, setPokemonSerchead, dispatch } ) => {
    try {
        if(regex.test(pokemonSerchead)){
            await dispatch(searchPokemon(pokemonSerchead));
            setPokemonSerchead('');
        }else{
            alert('Only letters');
        }
    } catch (error) {
        alert('The requested pokemon does not exist');
        setPokemonSerchead('');
    }
}

export const handleKey = (event, { pokemonSerchead, setPokemonSerchead, dispatch } ) => {
    if(event.key === 'Enter'){
        handleSearch({pokemonSerchead, setPokemonSerchead, dispatch})
    }
}

export const handleRedirect = ({ dispatch, navigate, searchPokemon }) => {
    navigate(`/pokemons/${searchPokemon.id}`);
    dispatch(resetState());
}