const getTypesController = require('../controllers/getTypesController');

const getAllTypes = async (req, res) => {
    try {
        const types = await getTypesController();
        res.status(200).send(types);
    }catch (error){
        res.status(500).send(error.message);
    }
}

module.exports = getAllTypes;