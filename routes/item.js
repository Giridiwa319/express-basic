const itemRoutes = require('express').Router()
const ItemController = require('../controller/ItemController');

itemRoutes.get('/', ItemController.getItems);
itemRoutes.post('/create', ItemController.create);
itemRoutes.get('/delete/:id', ItemController.delete);
itemRoutes.post('/update/:id', ItemController.update);
itemRoutes.get('/info/:id', ItemController.getInfoById);

module.exports = itemRoutes