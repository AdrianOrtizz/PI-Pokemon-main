

const pokemon = {
    id: 5004,
    name: 'abcdefg',
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png',
    imageShiny: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png',
    hp: 1,
    attack: 1,
    specialAttack: 1,
    defense: 1,
    specialDefense: 1,
    speed: 1,
    height: 1,
    weight: 1,
}

const bulbasaur = {
    id: 1,
    name: 'bulbasaur',
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png',
    imageShiny: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png',
    hp: 1,
    attack: 1,
    specialAttack: 1,
    defense: 1,
    specialDefense: 1,
    speed: 1,
    height: 1,
    weight: 1,
    type1: 1,
    type2: 2,
}


// describe('Model Pokemon', () => {
//     it('has been created', async () => {
//         const response = await request(server).post('/pokemons').send(pokemon);
//         console.log(response);
//         expect(response.statusCode).toEqual(201);
//     });

//     it('has not been created', async () => {
//         const response = await request(server).post('/pokemons').send(bulbasaur);
//         console.log(response);
//         expect(response.statusCode).toEqual(500);
//         expect(response.text).toEqual('The pokemon name already exist');
//     })
// })