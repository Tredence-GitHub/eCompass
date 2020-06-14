const express = require('express');
const Router = express.Router();
const path = require('path');

Router.use('/api', require('./dashboard.js'));
Router.use('/powerbi', require('./powerBiToken.js'));
// Router.get('/',(req,res) => {  
//     res.sendFile(path.join(__dirname,'../', 'build', 'index.html')) 
// });


// Router.use('/auth',require('./register'));

module.exports = Router;
