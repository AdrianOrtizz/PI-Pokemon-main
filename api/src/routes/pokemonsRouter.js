const { Router } = require('express');
const pokemonsRouter = Router();

const getAllPokemons = require('../handlers/getAllPokemons');
const getPokemonDetail = require('../handlers/getPokemonDetail');

pokemonsRouter.get('/', getAllPokemons);
pokemonsRouter.get('/:id', getPokemonDetail);

module.exports = pokemonsRouter;