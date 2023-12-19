//* Las peticiones se van a hacer con axios
const axios = require('axios');

//* Importamos el modelo de los pokemons para guardar cada uno en un registro de la base de datos
const { Type } = require('../db');

//* Endpoint al que haremos las peticiones a la api
const endpoint = 'https://pokeapi.co/api/v2/type';

const getTypesController = async () => {
    try {
        // hacemos la petición y traemos la data de los tipos
        const { data } = await axios(endpoint);
        // el array RESULTS de data contiene todos los tipos dentro de un objeto.
        // con el forEach creamos un registro para cada tipo 
        data.results.forEach(async (typeObj, index) => {
            const type = await Type.create({id: index, name: typeObj.name});
        })
        
    } catch (error) {
        throw error.message;
    }
}

module.exports = getTypesController;