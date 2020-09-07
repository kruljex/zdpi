const Router = require('express').Router();
mController = require('../controllers/mailController');
Router.route('/send').post(mController.sendMail);

module.exports = Router;
