
const createPokemonController = require('../controllers/createPokemonController');

const postPokemon = async (req, res) => {
    try {
        const { name, image, hp, attack, defense, specialAttack, specialDefense, speed, height, weight, types } = req.body;
        const newPokemon = await createPokemonController({ name, image, hp, attack, defense, specialAttack, specialDefense, speed, height, weight, types });
        res.status(201).json(newPokemon);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

module.exports = postPokemon;