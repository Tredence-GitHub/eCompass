const express = require('express');
const Router = express.Router();

const db = require('../config/db');

Router.get('/getRecommendations', (req, res)=>{
    db.query(`SELECT product_group, sku_id, sales_recommendation,\
    inventory_recommendation, content_health_recommendation, \
    ratings_and_reviews_recommendation, vendor FROM ecom.demo_recommendations_final;`).then((results) => {
        console.log(results);
        let fetched = results[0];
        
        res.json({data: results[0], message: "Successfull"});
    }).catch((err)=>{
        console.log(err);
        res.send({data: [], message: "Something went wrong!"});
    })
})

module.exports = Router;