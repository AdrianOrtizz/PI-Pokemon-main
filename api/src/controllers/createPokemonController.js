const { Pokemon } = require('../db');

const createPokemonController = async (poke) => {
    try {
        const lengthBD = await Pokemon.findAll();
        const id = lengthBD.length + 9000;

        
        poke.name = poke.name.toLowerCase();

        if(poke.name.includes(' ')){
            poke.name = poke.name.replace(' ', '-');
        }
        
        const newPoke = await Pokemon.create({ id, ...poke });
        
        await newPoke.addTypes(poke.types);

        return newPoke;
    } catch (error) {
        throw Error(error)
    }
}

module.exports = createPokemonController;