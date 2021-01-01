const router = require('express').Router();
const User = require('../models/user');
const bcrypt = require('bcryptjs');
const registerValidation = require('../validation').registerValidation;
const { loginValidation } = require('../validation');
const jwt = require('jsonwebtoken');



// User registration 
router.post('/register', async (req,res)=>{
    // Let's validate the data before we create a user
    const {error} = registerValidation(req.body);
    if (error) {
        // Extracting the important message, not the whole thing
        return res.status(400).send(error.details[0].message);
    };
 
    //Checking if the user is already in the database (case insensitive)
    const userExist = await User.findOne({email: req.body.email.toLowerCase()});
    if (userExist) return res.status(400).send('Email already exists!');
    
    // Hash the password 
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    // Create a new user
    const user = new User({
        name: req.body.name,
        email: req.body.email.toLowerCase(),
        password: hashedPassword,
    });
    try {
        const savedUser = await user.save();
        // We don't want to return everything, especially the password
        res.send({userID: savedUser._id});
    } catch (error) {
        res.status(400).send(error)
    }
})


// Login 
router.post('/login', async (req, res)=>{
    // Let's validate the data before login
    const {error}= loginValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    // Checking if the user is already in the database 
    const user = await User.findOne({email: req.body.email});
    if (! user) return res.status(400).send("Email doesn't exist!");

    // Checking password 
    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if(! validPassword) return res.status(400).send('Invalid password');
    
    // Create and assign a token 
    const token = jwt.sign({_id: user._id}, process.env.TOKEN_SECRET, 
        {expiresIn: "1200s"});
    // jwt sign payload can also be any attribute of the user object. e.g.'{email: user.email}', 
    
    // Add it to the header 
    res.header('auth-token', token).send(token);

    // Now I want to make sure that next request contains the token


  
})




module.exports = router;