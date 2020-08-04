const express = require('express');
const Router = express.Router();
const Sequelize = require('sequelize');
const { Op } = require("sequelize");

const {db, SimulatorTable, SaveSimulationTable, RecommendationsTable} = require('../config/db');
const { response } = require('express');

// GET Rows based on SKU ID and Prod Category
// GET ABS Value of the coefficients
// divide the arrays to 2
// Send the Second Arrays unique SKU ID

Router.post('/getSimulations', (req, res)=>{

    let request_data = req.body;
    if(request_data.product_category.length === 0 || request_data.sku_id.length === 0){
        res.json({message: 'success', data: []})
    }
    else{
        SimulatorTable.findAll({
            attributes: ['row_id',
                'Cluster',
                'product_category',
                'sku_id',
                'vendor',
                'column_names',
                'column_nm',
                'Value',
                'Value2',
                'Coefficient',
                'Coefficient_abs',
                'mean',
                'std',
                'intercept',
                'mean_sales',
                'std_sales',
                'rank',
                'sales_forecast',
                'sales_target'
                ],

                where: {
                    sku_id: request_data.sku_id,
                    product_category: request_data.product_category,
                    vendor: request_data.vendor
                },

                order: [
                    [ Sequelize.col('Coefficient_abs'), 'DESC'],
                ]

        }).then((result) => {
            // console.log(result);
            res.json({message: 'success', data: JSON.parse(JSON.stringify(result)), error: []});
        }).catch((err) =>{
            // console.log(err);
            res.json({message: 'failed', data: [], error: [err]});
        });
    }
})

Router.post('/saveSimulation', (req, res)=>{
    let request_data = req.body;
    // console.log(request_data);
    SaveSimulationTable.destroy({
        where:{
            sku_id: request_data.sku_id[0],
            product_category: request_data.product_category[0]
        }
    }).then((results)=> {
        // console.log(results, '--- ');
            // console.log('CAME HERE ####');
            for(let i = 0; i < request_data.saveData.length; i++){
                SaveSimulationTable.create(request_data.saveData[i])
                .then((response)=>{
                    if(i === request_data.saveData.length-1){
                        res.json({message: 'success', data: []});
                    }
                }).catch((err)=>{
                    res.json({message: 'failed to insert rows', error: [err]});
                })
            }
            
        // }
    })
});

Router.post('/getSavedSimulations',(req, res)=>{
    let request_data = req.body;

    SaveSimulationTable.findAll({
        attributes: ['row_id',
        'product_category',
        'sku_id',
        'vendor',
        'column_nm',
        'Value',
        'Value2',
        'Coefficient',
        'Coefficient_abs',
        'mean',
        'std',
        'intercept',
        'mean_sales',
        'std_sales',
        'rank',
        'sales_forecast',
        'sales_target'  
         ] ,
        
        where: {
            vendor: request_data.vendor,
            product_category: request_data.product_category,
            sku_id: request_data.sku_id

        }
        
    }).then((response)=>{
        SaveSimulationTable.findAll({
            attributes: ['sku_id',
            'product_category',
            'sales_forecast',
            'sales_target'
            ],
            where:{
                vendor: request_data.vendor,
                product_category: request_data.product_category,
                sku_id: request_data.sku_id
            },
            group: ['sku_id', 'product_category', 'sales_forecast', 'sales_target']
        }).then((result2)=> {
            // console.log(":::::: ", response);
            res.json({message: 'success', data: JSON.parse(JSON.stringify(response)), unique_logs: JSON.parse(JSON.stringify(result2))});
        }).catch((err)=>{
            res.json({message: 'failed', error: [err]});    
        })
        
    }).catch((err)=>{
        res.json({message: 'failed', error: [err]});
    })
})


Router.post('/getAllSavedSimulations',(req, res)=>{
    let request_data = req.body;

    SaveSimulationTable.findAll({
        attributes: ['row_id',
        'product_category',
        'sku_id',
        'vendor',
        'column_nm',
        'Value',
        'Value2',
        'Coefficient',
        'Coefficient_abs',
        'mean',
        'std',
        'intercept',
        'mean_sales',
        'std_sales',
        'rank',
        'sales_forecast',
        'sales_target'  
         ] ,
        
        where: {
            vendor: request_data.vendor,
        }   
    }).then((response)=>{
        SaveSimulationTable.findAll({
        attributes: ['sku_id',
        'product_category',
        
        ],
        where:{
            vendor: request_data.vendor
        },
        group: ['sku_id', 'product_category']
    }).then((result2)=> {
        // console.log(":::::: ", response);
        res.json({message: 'success', data: JSON.parse(JSON.stringify(response)), unique_logs: JSON.parse(JSON.stringify(result2))});
    }).catch((err)=>{
        res.json({message: 'failed', error: [err]});    
    })
    }).catch((err)=>{
        res.json({'message': 'failed to fetch all simulations', error: [err]});
    })
});



module.exports = Router;