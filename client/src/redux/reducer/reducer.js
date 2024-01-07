import { GET_ALL_POKEMONS, SEARCH_POKEMON, RESET_STATE, ORDER_POKEMONS, FILTER_POKEMONS, GET_POKEMON_DETAIL } from "../actions/actions-types";

const initialState = {
    pokemonDetail: {},
    pokemons: [],
    pokemonsAux: [],
}

const rootReducer = (state = initialState, { type, payload }) => {
    switch(type){
        case GET_ALL_POKEMONS:
            return {
                ...state,
                pokemons: payload,
                pokemonsAux: payload
            }

        case SEARCH_POKEMON:
            return {
                ...state,
                pokemonDetail: payload
            }
            
        case RESET_STATE:
            return {
                ...state,
                pokemonDetail: payload
            }

        case ORDER_POKEMONS:
            let pokemonsInOrder = [...state.pokemonsAux]
            pokemonsInOrder.sort((a, b) => {
                if(payload === 'PNU') return a.id - b.id;
                if(payload === 'PNF') return b.id - a.id;
                if(payload === 'HP') return b.hp - a.hp;
                if(payload === 'AT') return b.attack - a.attack;
                if(payload === 'DF') return b.defense - a.defense;
                if(payload === 'SA') return b.specialAttack - a.specialAttack;
                if(payload === 'SD') return b.specialDefense - a.specialDefense;
                if(payload === 'SP') return b.speed - a.speed;
            })

            return {
                ...state,
                pokemonsAux: pokemonsInOrder
            }

        case FILTER_POKEMONS:
            if(payload === 'AP'){
                return {...state, pokemonsAux: state.pokemons}
            }else{
                let filteredPokemons = state.pokemons.filter((poke) => poke.origin === payload);
                return {...state, pokemonsAux: filteredPokemons}
            }
        
        case GET_POKEMON_DETAIL:
            return {
                ...state,
                pokemonDetail: payload
            }

        default:
            return {...state}
    }
}

export default rootReducer;
