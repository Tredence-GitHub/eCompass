module.exports = (sequelize, type) => {
    return sequelize.define('demo_recommendations_final',{
        key: {
            type: type.INTEGER
        },
        product_group: {
            type: type.STRING
        },
        sku_id: {
            type: type.INTEGER,
            primaryKey: true
        },
        vendor: {
            type: type.STRING
        },
        sales_recommendation: {
            type: type.STRING
        },
        inventory_recommendation: {
            type: type.STRING
        },
        ratings_and_reviews_recommendation: {
            type: type.STRING
        },
        content_health_recommendation: {
            type: type.STRING
        }
        
    },{underscored: true, tablename: 'demo_recommendations_final',
     schema: 'ecom',
     freezeTableName: true, timestamps: false})
}