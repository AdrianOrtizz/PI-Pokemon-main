const getTypesController = require('../controllers/getTypesController');

const getAllTypes = async (req, res) => {
    try {
        getTypesController();
        res.status(200).send('Tipos cargados en la base de datos');
    }catch (error){
        res.status(500).send(error.message);
    }
}

module.exports = getAllTypes;