import axios from 'axios';
import { GET_ALL_POKEMONS, SEARCH_POKEMON, RESET_STATE, ORDER_POKEMONS, FILTER_POKEMONS, GET_POKEMON_DETAIL, CREATE_POKEMON, GET_ALL_TYPES } from './actions-types';

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
            throw Error(error.message);
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
            alert('The requested pokemon does not exist');
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
            throw Error(error.message);
        }
    }
}

export const createPokemon = (pokemon) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.post(endpoint, pokemon);
            return dispatch({
                type: CREATE_POKEMON,
                payload: data
            })
        } catch (error) {
            if(error.response.data === 'The pokemon name already exist'){
                alert('The pokemon name already exist')
            }
            console.log(error);
        }
    }    
}

export const getAllTypes = () => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get('http://localhost:3001/type');
            return dispatch({
                type: GET_ALL_TYPES,
                payload: data
            })
        } catch (error) {
            throw Error(error.message);
        }
    }
}