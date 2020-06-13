const router = require('express').Router();
const verify = require("./verifyToken");
const User = require('../models/User');
const {configValidation} = require('../../validation');

router.put('/',verify,(req,res) => {
    //validate the data before updating a user
    const { error } = configValidation(req.body);
    if(error) return res.status(400).send(error.details[0].message);  

    User.updateOne({_id:req.user},{resType : req.body.resType}, (err)=>{
        if (err) {
            return res.status(500).send({
                message: `Error updating configuration details`
            });
        }
        res.send("configurations saved successfully");
    })
})
module.exports = router
