const express = require('express');
const app = express();

// For hiding authentication info
require('dotenv/config');

// Database connection
const mongoose = require('mongoose');
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result)=> {
        app.listen(5000);
        console.log("Server up and listening...");})
    .then(()=>{
        console.log('Connected to db')
    })
    .catch((err)=> console.log(err));

// Request Body-parser 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Import Routes
const authRoute = require('./routes/auth');
const postRoute = require('./routes/posts');

// Every time we route to 'api/user', we use authRoute
app.use('/api/user', authRoute);
app.use('/api/posts', postRoute);





