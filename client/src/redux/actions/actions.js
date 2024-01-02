import axios from 'axios';
import { GET_ALL_POKEMONS, SEARCH_POKEMON } from './actions-types';

const endpoint = 'http://localhost:3001/pokemons';

export const getAllPokemons = () => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(endpoint);
            return dispatch(
                {
                    type: GET_ALL_POKEMONS,
                    payload: data
                }
            )
        } catch (error) {
            throw Error(error)
        }
    }
}

export const searchPokemon = (name) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`${endpoint}?name=${name}`);
            return dispatch(
                {
                    type: SEARCH_POKEMON,
                    payload: data.id
                }
            )
        } catch (error) {
            throw Error(error)
        }
    }
}