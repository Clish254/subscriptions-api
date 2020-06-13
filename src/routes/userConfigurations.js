const User = require('../models/User');

//middleware to check user configurations
module.exports = function (req,res,next){
        try {
        user = User.findById({_id: req.user})
        UserResType = user.reqType
        next();
        }catch(err){
            res.status(500).send('Unable to use configurations')
        }
}