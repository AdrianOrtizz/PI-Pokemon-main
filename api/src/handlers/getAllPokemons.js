/* 
    Esta ruta va a traer 48 pokemons (4 páginas) para que se
    rendericen en la home page. Esta URL sirve para traer los 
    pokemons y para buscar los pokemons mediante la seach bar
*/

const searchPokemonController = require('../controllers/searchPokemonController');
const getPokemonsController = require('../controllers/getPokemonsController')

const getAllPokemons = async (req, res) => {
    try {
        if(req.query.name){
            //* Si la petición llega con un query
            // hace la busqueda de ese pokemon

            const poke = await searchPokemonController(req.query.name);
            return res.status(200).json(poke)
        }else{
            //* Si la petición llega sin query    
            // trae los 48 pokemons

            const pokemonList = await getPokemonsController();
            res.status(200).send(pokemonList);
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}

module.exports = getAllPokemons;
