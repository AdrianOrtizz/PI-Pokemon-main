const searchPokemonController = require('../controllers/searchPokemonController');
const getPokemonsController = require('../controllers/getPokemonsController')

const getAllPokemons = async (req, res) => {
    try {
        if(req.query.name){
            const poke = await searchPokemonController(req.query.name);

            if(poke){
                return res.status(200).json(poke)
            }else{
                return res.status(404).send('The requested pokemon does not exist');
            }
        }else{
            const pokemonList = await getPokemonsController();
            return res.status(200).send(pokemonList);
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}

module.exports = getAllPokemons;
