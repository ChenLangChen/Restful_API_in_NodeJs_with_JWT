const router = require('express').Router();
const verify = require('./verifyToken');

// Adding the verify middleware, please include the granted token in the request headers
router.get('/', verify, (req, res) =>{
    // Now with every request, we have access to the user :)
    res.send(req.user);
    // res.json({posts: {      
    //     title: "My first post", 
    //     description : "Random data you should not access."}})

})

//TODO 目前还是人工手动token, how to attach a token to a url request
module.exports = router;

// nginx How to productionize it? Tutorial 
