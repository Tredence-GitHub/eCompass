const express = require('express');
const Router = express.Router();
const path = require('path');

Router.use('/api', require('./dashboard.js'));

// only for deployment
Router.get('/*',(req,res) => {  
    // console.log(path.join(__dirname,'../', 'build', 'index.html'));
    res.sendFile(path.join(__dirname,'../', 'build', 'index.html')) 
});


// Router.use('/auth',require('./register'));

module.exports = Router;
