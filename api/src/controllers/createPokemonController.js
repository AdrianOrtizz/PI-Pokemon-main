const { Pokemon, Type } = require('../db');

const createPokemonController = async (poke) => {
    try {
        // para darle un id, o sea, un número en la pokedex,
        // traemos la cantidad de pokemons que haya creado el usuario
        // y le sumamos la cantidad de pokemons total que tiene la 
        // pokedex más uno. Entonces como el último pokemon en la
        // pokedex es el 1017, el que cree el usuario va a ser el 
        // 1018 y se va a ir aumentando cada vez que el usuario cree otro
        const lengthBD = await Pokemon.findAll();
        const id = lengthBD.length + 9000;

        const newPoke = await Pokemon.create({ id, origin: 'DB', ...poke });

        newPoke.addTypes(poke.types);

        return newPoke;
    } catch (error) {
        throw Error('Error when creating the pokemon')
    }
}

module.exports = createPokemonController;