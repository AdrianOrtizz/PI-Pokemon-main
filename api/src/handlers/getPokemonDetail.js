const pokemonDetailController = require('../controllers/pokemonDetailController');

const getPokemonDetail = async (req, res) => {
    try {
        const pokemonDetail = await pokemonDetailController(req.params.id);
        res.status(200).json(pokemonDetail);
    } catch (error) {
        res.status(404).send(error.message);
    }
}

module.exports = getPokemonDetail;