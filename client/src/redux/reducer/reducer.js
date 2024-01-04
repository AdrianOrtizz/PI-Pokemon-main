import { GET_ALL_POKEMONS, SEARCH_POKEMON, RESET_STATE } from "../actions/actions-types";

const initialState = {
    searchPokemon: {},
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
                searchPokemon: payload
            }
        case RESET_STATE:
            return {
                ...state,
                searchPokemon: payload
            }
        default:
            return {...state}
    }
}

export default rootReducer;
