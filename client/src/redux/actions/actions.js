import axios from 'axios';
import { GET_ALL_POKEMONS, SEARCH_POKEMON, RESET_STATE, ORDER_POKEMONS, FILTER_POKEMONS, GET_POKEMON_DETAIL } from './actions-types';

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
                    payload: data
                }
            )
        } catch (error) {
            throw Error(error)
        }
    }
}

export const resetState = () => {
    return {
        type: RESET_STATE,
        payload: {}
    }
}

export const orderPokemons = (order) => {
    return {
        type: ORDER_POKEMONS,
        payload: order
    }
}

export const filterPokemons = (filter) => {
    return {
        type: FILTER_POKEMONS,
        payload: filter
    }
}

export const getPokemonDetail = (id) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`${endpoint}/${id}`);
            return dispatch(
                {
                    type: GET_POKEMON_DETAIL,
                    payload: data
                }
            )
        } catch (error) {
            throw Error(error)
        }
    }
}