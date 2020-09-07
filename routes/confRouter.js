const cHandler = require('../controllers/configController');
const Router = require('express').Router();

Router.route('/write').post(cHandler.writeConfiguration);
Router.route('/get').get(cHandler.getAll);
Router.route('/get/:id').get(cHandler.getOne);
module.exports = Router;
