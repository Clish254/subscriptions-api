const express = require('express');
const router = express.Router();
const subscriberController = require('../controllers/subscriber.contollers');
const verify = require("./verifyToken");
const userConfig = require('./userConfigurations')


//get all subscribers
router.get('/',verify,userConfig,subscriberController.findAll);

//create a new subscriber
router.post('/',verify,userConfig,subscriberController.create);

//Retrieve a single subscriber with id
router.get('/:id',verify,userConfig,subscriberController.findOne);

//update a single subscriber with id
router.put('/:id',verify,userConfig,subscriberController.update);

//Delete a subscriber with id
router.delete('/:id',verify,userConfig,subscriberController.delete);

module.exports = router;