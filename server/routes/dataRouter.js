const Router = require('express');
const router = new Router();
const DataController = require('../controllers/dataController')


router.get('/', DataController.getAllData);
router.get('/:id', DataController.getOneData);
router.post('/', DataController.createData);
router.put('/:id', DataController.updateData);
router.delete('/:id', DataController.deleteData);

module.exports = router;