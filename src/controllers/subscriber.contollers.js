const Subscriber = require('../models/subscriber.model');

//Retrieve and return all subscribers from the database

exports.findAll = (req,res) => {
    Subscriber.find()
    .then(subscribers => {
    res.send(subscribers);
}).catch(err => {
    res.status(500).send({
        message:err.message || "Something went wrong while retrieving subscribers."
    });
});

};

//create and save a new Subscriber
exports.create = (req,res) => {
    //validate request
    if(!req.body){
        return res.status(400).send({
            message:"Please fill all required fields"
        });
    }
    //create a new Subscriber
    const subscriber = new Subscriber({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        plan: req.body.plan
    });
    //save subscriber in our database
    subscriber.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message:err.message || "Something went wrong while creating new subscriber"         
            });
        });
    }
//find a single subscriber with an id
exports.findOne = (req,res) => {
    Subscriber.findById(req.params.id)
        .then(subscriber => {
            if(!subscriber){
                return res.status(404).send({
                    message:`Subscriber not found with id ${req.params.id}`
                });
            }
            res.send(subscriber);
        }).catch(err => {
            if(err.kind === 'ObjectId'){
                return res.status(404).send({
                    message:`Subscriber not found with id ${req.params.id}`
                });
            }
            return res.status(500).send({
                message:`Error getting subscriber with id req.params.id`
            });
        })
};
//update a subscriber by id
exports.update = (req,res) => {
    //validate request
    if(!req.body) {
        return res.status(400).send({
            message: "Please fill all required fields"
        });
    }
    //Find subscriber and update them with request body
    Subscriber.findByIdAndUpdate(req.params.id,{
       first_name: req.body.first_name,
       last_name: req.body.last_name,
       email: req.body.email,
       plan: req.body.plan
    },{new:true})
    .then(subscriber => {
        if(!subscriber){
            return res.status(404).send({
                message: `Subscriber not found`
            });
        }
        res.send(subscriber);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: `Subscriber not found`
            });            
        }
        return res.status(500).send({
            message: `Error updating subscriber`
        });
    });
}
//delete a subscriber by id
exports.delete = (req,res) => {
    Subscriber.findByIdAndRemove(req.params.id)
    .then(subscriber => {
        if(!subscriber) {
            return res.status(404).send({
                message: `Subscriber not found`
            })
        }
        res.send({message: "user deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'Not found') {
            return res.status(404).send({
                message: `Subscriber not found`
            });
        }
        return res.status(500).send({
            message: `Could not subscriber`
        });
    });
}