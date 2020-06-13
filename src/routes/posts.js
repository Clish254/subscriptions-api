const router = require('express').Router();
const verify = require("./verifyToken");
const userConfig = require('./userConfigurations')

router.get("/",verify,userConfig,(req,res) => {
    res.json({
        posts:{
            title:'My first post',
            description:'random data you shouldnt access'
        }
    })
})

module.exports = router