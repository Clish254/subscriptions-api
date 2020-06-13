const router = require('express').Router();
const verify = require("./verifyToken");

router.get("/documentation",verify,(req,res) => {
    res.json({
        "message":"Hello World"
    });
});

module.exports = router