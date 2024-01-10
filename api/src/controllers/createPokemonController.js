const { Pokemon, Type} = require('../db');

const createPokemonController = async (poke) => {
    try {
        // para darle un id, o sea, un número en la pokedex,
        // traemos la cantidad de pokemons que haya creado el usuario
        // y le sumamos 9000 para asegurarnos de que no hay otro pokemon
        // con ese id.
        const lengthBD = await Pokemon.findAll();
        const id = lengthBD.length + 9000;
        
        const newPoke = await Pokemon.create({ id, ...poke });
        
        await newPoke.addTypes(poke.types);

        return newPoke;
    } catch (error) {
        throw Error('Error when creating the pokemon')
    }
}

module.exports = createPokemonController;