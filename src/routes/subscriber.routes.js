const express = require('express');
const router = express.Router();
const subscriberController = require('../controllers/subscriber.contollers');

//get all subscribers
router.get('/',subscriberController.findAll);

//create a new subscriber
router.post('/',subscriberController.create);

//Retrieve a single subscriber with id
router.get('/:id',subscriberController.findOne);

//update a single subscriber with id
router.put('/:id',subscriberController.update);

//Delete a subscriber with id
router.delete('/:id',subscriberController.delete);

module.exports = router;