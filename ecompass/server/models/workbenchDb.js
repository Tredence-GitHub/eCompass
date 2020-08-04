module.exports = (sequelize, type) => {
    return sequelize.define('wb_input',{
        feed_product_type: {
            type: type.STRING
        },
        item_sku: {
            type: type.INTEGER,
            primaryKey: true
        },
        brand_name: {
            type: type.STRING
        },
        external_product_id: {
            type: type.STRING
        },
        external_product_id_type: {
            type: type.STRING
        },
        item_name: {
            type: type.STRING
        },
        manufacturer: {
            type: type.STRING
        },
        part_number: {
            type: type.STRING
        },
        recommended_browse_nodes: {
            type: type.STRING
        },
        standard_price: {
            type: type.STRING
        },
        quantity: {
            type: type.STRING
        },
        maximum_retail_price: {
            type: type.STRING
        },
        is_expiration_dated_product: {
            type: type.STRING
        },
        main_image_url: {
            type: type.STRING
        },
        other_image_url1: {
            type: type.STRING
        },
        other_image_url2: {
            type: type.STRING
        },
        other_image_url3: {
            type: type.STRING
        },
        other_image_url4: {
            type: type.STRING
        },
        other_image_url5: {
            type: type.STRING
        },
        other_image_url6: {
            type: type.STRING
        },
        other_image_url7: {
            type: type.STRING
        },
        other_image_url8: {
            type: type.STRING
        },
        swatch_image_url: {
            type: type.STRING
        },
        business_price: {
            type: type.STRING
        },
        quantity_price_type: {
            type: type.STRING
        },
        quantity_price1: {
            type: type.STRING
        },
        quantity_lower_bound1: {
            type: type.STRING
        },
        quantity_price2: {
            type: type.STRING
        },
        quantity_lower_bound2: {
            type: type.STRING
        },
        quantity_price3: {
            type: type.STRING
        },
        quantity_lower_bound3: {
            type: type.STRING
        },
        quantity_price4: {
            type: type.STRING
        },
        quantity_lower_bound4: {
            type: type.STRING
        },
        quantity_price5: {
            type: type.STRING
        },
        quantity_lower_bound5: {
            type: type.STRING
        },
        pricing_action: {
            type: type.STRING
        },
        update_flag: {
            type: type.STRING
        },
        download_flag: {
            type: type.STRING
        }
        
    },{underscored: true, tablename: 'wb_input',
     schema: 'ecom',
     freezeTableName: true, timestamps: false})
}