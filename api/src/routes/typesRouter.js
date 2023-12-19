const { Router } = require('express');
const typesRouter = Router();

const getAllTypes = require('../handlers/getAllTypes');

typesRouter.get('/', getAllTypes);

module.exports = typesRouter;