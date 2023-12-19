const { Router } = require('express');
const router = Router();
// Importar todos los routers;

const pokemonsRouter = require('./pokemonsRouter'); 
const typesRouter = require('./typesRouter'); 

// Configurar los routers

router.use('/pokemons', pokemonsRouter);
router.use('/type', typesRouter);

module.exports = router;
