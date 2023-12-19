const { Router } = require('express');
const pokemonsRouter = Router();

const getAllPokemons = require('../handlers/getAllPokemons');
const getPokemonDetail = require('../handlers/getPokemonDetail');

const postPokemon = require('../handlers/postPokemon');

pokemonsRouter.get('/', getAllPokemons);
pokemonsRouter.get('/:id', getPokemonDetail);

pokemonsRouter.post('/', postPokemon);

module.exports = pokemonsRouter;