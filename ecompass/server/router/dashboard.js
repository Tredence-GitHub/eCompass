const express = require('express');
const Router = express.Router();

const db = require('../config/db');

Router.get('/getInfo', (req, res)=>{
    db.query(`SELECT * FROM dashboards`).then((results) => {
        console.log(results);
        res.json(results);
    })
})

module.exports = Router;