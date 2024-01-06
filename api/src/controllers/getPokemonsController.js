//* Las peticiones se van a hacer con axios
const axios = require('axios');
const endpoint = 'https://pokeapi.co/api/v2/pokemon/';

const getPokemonsController = async () => {
    try {
        // en este array se guardan las 48 peticiones 
        // de los pokemons que vamos a mostrar
        const newPromises = [];
        for(let i = 1; i <= 48; i++){
            newPromises.push(axios(`${endpoint}${i}`));
        }
        let newPokemons = await Promise.all(newPromises);
        
        // nos quedamos solo con el objeto data de cada elemento
        newPokemons = newPokemons.map(pok => pok.data);
        
        // transformamos la data en un objeto más legible con
        // solo las propiedades que necesitamos del pokemon
        newPokemons = newPokemons.map(pok => {
            const poke = {
                id: pok.id,
                name: pok.name,
                image: pok.sprites.front_default,
                imageShiny: pok.sprites.front_shiny,
                hp: pok.stats[0].base_stat,
                attack: pok.stats[1].base_stat,
                defense: pok.stats[2].base_stat,
                specialAttack: pok.stats[3].base_stat,
                specialDefense: pok.stats[4].base_stat,
                speed: pok.stats[5].base_stat,
                height: pok.height,
                weight: pok.weight,
                types: [pok.types[0].type],
                origin: 'API',
            }

            pok.types[1] && poke.types.push(pok.types[1].type)

            return poke;
        })

        return newPokemons;
        
    } catch (error) {
        throw error.message
    }
}

module.exports = getPokemonsController;

