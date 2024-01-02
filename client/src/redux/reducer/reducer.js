import { GET_ALL_POKEMONS, SEARCH_POKEMON } from "../actions/actions-types";

const initialState = {
    pokemonDetail: '',
    pokemons: []
}

const rootReducer = (state = initialState, { type, payload }) => {
    switch(type){
        case GET_ALL_POKEMONS:
            return {
                ...state,
                pokemons: payload
            }

        case SEARCH_POKEMON: 
            return {
                ...state,
                pokemonDetail: payload
            }
        default:
            return {...state}
    }
}

export default rootReducer;
