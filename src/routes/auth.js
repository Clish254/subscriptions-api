const router = require('express').Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const {registerValidation} = require('../../validation')
const {loginValidation} = require('../../validation');
const jwt = require('jsonwebtoken')


router.post('/register',async (req,res) => {
    //validate the data before making a user
    const { error } = registerValidation(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    //checking if the user is already in the database
    const emailExists = await User.findOne({email: req.body.email});
    if(emailExists) return res.status(400).send('Email already exists');

    //hash passwords
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password,salt)

    
    //create user
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword
    })
    try{
        const savedUser = await user.save();
        res.send({user: user._id})
    }catch(err){
        res.status(400).send(err);
    }
});

//login
router.post('/login', async (req,res) => {
    //validate the data before making a user
    const { error } = loginValidation(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    //checking if the user is already in the database
    const user = await User.findOne({email: req.body.email});
    if(!user) return res.status(400).send('Email is not found');

    //password is correct
    const validPass = await bcrypt.compare(req.body.password,user.password);
    if(!validPass) return res.status(400).send('Invalid password')

    //create and assign a token
    const token = jwt.sign({_id: user._id},process.env.TOKEN_SECRET);
    res.header('auth-token',token).send(token)
});

module.exports = router;