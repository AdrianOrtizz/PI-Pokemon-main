
const { Pokemon } = require('../db')

const createPokemonController = require('../controllers/createPokemonController');

const postPokemon = async (req, res) => {
    try {
        const { name, image, imageShiny, hp, attack, defense, specialAttack, specialDefense, speed, height, weight, type1, type2 } = req.body;
        
        const types = [type1, type2];

        type2 === 20 && types.pop();
        
        const pokeExist = await Pokemon.findOne({
            where: {
                name: name
            }
        })

        if(!pokeExist){
            const newPokemon = await createPokemonController({ name, image, imageShiny, hp, attack, defense, specialAttack, specialDefense, speed, height, weight, types });
            res.status(201).json(newPokemon);
        }else{
            res.status(500).send('The pokemon name already exist');
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
}

module.exports = postPokemon;