const express = require('express');
const Router = express.Router();

const { db, RecommendationsTable } = require('../config/db');

Router.get('/getRecommendations/:vendor', (req, res)=>{
    RecommendationsTable.findAll({
        attributes: [ 'product_group', 'sku_id', 'sales_recommendation',
            'inventory_recommendation', 'content_health_recommendation', 
            'ratings_and_reviews_recommendation', 'vendor'],
        where: {
            vendor: `${req.params.vendor}`
        }
    }).then((results)=>{
        res.json({data: JSON.parse(JSON.stringify(results)), message: "Successfull"});
    }).catch((err)=>{
        console.log(err);
        res.send({data: [], message: "Something went wrong!", error: err});
    })
})


Router.get('/get360/:vendor', (req, res)=>{
    db.query(`SELECT * from ecom.product_360_view where vendor='${req.params.vendor}' and product_group='Overall'`).then((results)=>{
        console.log(results);
        res.json({data: results[0], message: "Successfull"});
    }).catch((err)=>{
        console.log(err);
        res.send({data: [], message: "Something went wrong!", error: err});
    })
})

module.exports = Router;