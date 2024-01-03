//* Las peticiones se van a hacer con axios
const axios = require('axios');
const endpoint = 'https://pokeapi.co/api/v2/pokemon/';

const searchPokemonController = async (name) => {
    try {

        if(name.includes(' ')){
            name = name.replace(' ', '-');
        }

        name = name.toLowerCase();

        const { data } = await axios(`${endpoint}${name}`);
        
        // traemos toda la información del pokemon
        const poke = {
            id: data.id,
            name: data.name,
            image: data.sprites.front_default,
            hp: data.stats[0].base_stat,
            attack: data.stats[1].base_stat,
            defense: data.stats[2].base_stat,
            specialAttack: data.stats[3].base_stat,
            specialDefense: data.stats[4].base_stat,
            speed: data.stats[5].base_stat,
            height: data.height,
            weight: data.weight,
            types: [data.types[0].type],
        }

        // si el pokemon tiene más de un tipo, se agrega al array
        data.types[1] && poke.types.push(data.types[1].type);
    
        return poke;
    } catch (error) {
        throw Error('The requested pokemon does not exist')
    }
}

module.exports = searchPokemonController;