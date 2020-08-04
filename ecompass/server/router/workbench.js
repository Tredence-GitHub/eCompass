const express = require('express');
const Router = express.Router();
const Sequelize = require('sequelize');
const { Op } = require("sequelize");

const {db, WorkbenchTable, RecommendationsTable, SaveSimulationTable} = require('../config/db');

Router.get('/workbench-productTypes', (req, res) => {
    WorkbenchTable.findAll({
        attributes: [[Sequelize.literal('DISTINCT feed_product_type'), 'feed_product_type']],
    }).then((result) => {
        res.json({
            message: 'success', data: {
                product_category: JSON.parse(JSON.stringify(result))
            }
        });
    }).catch((err) => {
        res.json({message: 'Failed', err: [err]})
    })
})


Router.get('/workbench-skuIds', (req, res) => {
    WorkbenchTable.findAll({
        attributes: [[Sequelize.literal('DISTINCT item_sku'), 'item_sku']],
        where: {
            feed_product_type: {
                [Op.in] : [req.query.prodTypes]
            }
        }
    })
        .then((result) => {
            res.json({
                message: 'success', data: {
                    seller_sku: JSON.parse(JSON.stringify(result)),
                }
            });
        })
        .catch((err) => {
            res.send({message: 'Failed', err: [err]})
        })
})

Router.post('/workbench-data', (req, res) => {
    let request_data = req.body;
    let conditions = {};

    if (request_data.item_sku.length === 0 && request_data.product_category.length !== 0) {
        conditions = {
            feed_product_type: request_data.product_category
        }
    } else if (request_data.product_category.length === 0 && request_data.item_sku.length !== 0) {
        conditions = {
            item_sku: request_data.item_sku,
        }
    } else if (request_data.item_sku.length === 0 && request_data.product_category.length === 0) {
        conditions = {}
    } else {
        conditions = {
            item_sku: request_data.item_sku,
            feed_product_type: request_data.product_category
        }
    }

    WorkbenchTable.findAll({
        include: [
            {
                model: RecommendationsTable,
                attributes: ['sales_recommendation',
                    'inventory_recommendation', 'content_health_recommendation',
                    'ratings_and_reviews_recommendation'],
                where: {
                    vendor: request_data.vendor
                }
            }           
            
        ],
        attributes: ['feed_product_type', 'item_sku', 'brand_name', 'external_product_id', 'external_product_id_type', 'item_name',
            'manufacturer', 'part_number', 'recommended_browse_nodes', 'standard_price', 'quantity', 'maximum_retail_price', 'is_expiration_dated_product', 'main_image_url', 'other_image_url1', 'other_image_url2', 'other_image_url3', 'other_image_url4', 'other_image_url5', 'other_image_url6', 'other_image_url7', 'other_image_url8', 'swatch_image_url', 'business_price', 'quantity_price_type', 'quantity_price1', 'quantity_lower_bound1', 'quantity_price2', 'quantity_lower_bound2', 'quantity_price3', 'quantity_lower_bound3', 'quantity_price4', 'quantity_lower_bound4',
            'quantity_price5', 'quantity_lower_bound5', 'pricing_action', 'update_flag', 'download_flag'
            ],
        where: conditions
    }).then((result) => {
        console.log(result.length);
        let frameSimulation = {};
        let setFrames = 0;
        // if(request_data.item_sku.length == 0 || request_data.product_category.length == 0 ){            
                for(let i = 0; i < result.length; i++){
                    console.log(result[i].item_sku , ":::::: ")
                    SaveSimulationTable.findAll({
                        attributes: ['row_id', 'sku_id', 'column_nm','sales_target',
                        'sales_forecast', 'Value', 'Value2'],
                        where:{
                            sku_id: result[i].item_sku,
                            product_category: request_data.product_category
                        }
                    }).then(async (simulation)=>{
                        let sku = result[i].item_sku;

                        console.log(simulation.length, "----- ", sku);
                        try{
                        
                        frameSimulation = await settingData(sku, simulation, frameSimulation);
                        console.log(Object.keys(frameSimulation), " ----- ")
                        
                        if(Object.keys(frameSimulation).length === result.length){
                            res.json({message: 'success', data: JSON.parse(JSON.stringify(result)), 
                            simulations: JSON.parse(JSON.stringify(frameSimulation)) });
                        }  
                        }
                        catch(exception){
                            console.log(exception)
                        } 
                    }).catch((err)=>{
                        res.json({message: 'Failed to fetch simulations', error: [err]});
                    });

                    
                } 

    }).catch((err) => {
        res.json({message: 'Failed', err: [err]})
    })
})

async function settingData(sku, simulation, frameSimulation){
    if(simulation.length > 0){
        console.log("Result for ", sku);
       
        frameSimulation[sku] = simulation;
        return frameSimulation;  
        
    }else{
        console.log("NOO RESULT for ", sku);
        
       frameSimulation[sku] = [];
       return frameSimulation;
    }
}

Router.post('/workbench-updatedata', (req, res) => {
    let request_data = req.body;
    let updated_successfully = 0;

    for (let i = 0; i < request_data.length; i++) {
        WorkbenchTable.update(request_data[i], {
            where: {
                item_sku: request_data[i]['item_sku']
            }
        }).then((response) => {
            updated_successfully = 1;
            if (updated_successfully == 1 && i == request_data.length - 1) {
                res.json({message: 'success', data: []})
            }
        }).catch((err) => {
            res.json({message: 'Failed to update here '});
        })
    }


})

Router.post('/workbench-publishdata', (req, res)=>{

        WorkbenchTable.findAll({
            attributes: ['feed_product_type', 'item_sku', 'brand_name', 'external_product_id', 'external_product_id_type', 'item_name',
            'manufacturer', 'part_number', 'recommended_browse_nodes', 'standard_price', 'quantity', 'maximum_retail_price', 'is_expiration_dated_product', 'main_image_url', 'other_image_url1', 'other_image_url2', 'other_image_url3', 'other_image_url4', 'other_image_url5', 'other_image_url6', 'other_image_url7', 'other_image_url8', 'swatch_image_url', 'business_price', 'quantity_price_type', 'quantity_price1', 'quantity_lower_bound1', 'quantity_price2', 'quantity_lower_bound2', 'quantity_price3', 'quantity_lower_bound3', 'quantity_price4', 'quantity_lower_bound4',
            'quantity_price5', 'quantity_lower_bound5', 'pricing_action', 'update_flag'],
            
            where: {
                update_flag: '1'
            } 
        }).then((downloadables)=>{
            
                console.log('DOWNLOADABLE  -- ', downloadables)
                res.json({message: 'success', data: JSON.parse(JSON.stringify(downloadables))})
           
            
        }).catch((err)=>{
            console.log(' ERROR in downloadable ', [err])
        })

})

Router.get('/setPublishedFlag',(req, res)=> {
    WorkbenchTable.update({
        update_flag: '0'
    }, {
        where: {
            update_flag: '1'
        }
    }).then((result)=> {
        res.json({message: 'success'})
    }).catch((err)=> {
        console.log(' ERROR in setting updated flag after it is downloaded ', [err])
        res.json({message: 'Failed'})
    })

})
    
    

module.exports = Router;