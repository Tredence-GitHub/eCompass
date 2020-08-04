module.exports = (sequelize, type) => {
    return sequelize.define('sql_Final_simulator_input', {
        row_id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        Cluster: {
            type:type.BIGINT
        },
        product_category: {
            type: type.STRING
        },
        sku_id: {
            type: type.BIGINT
        },
        vendor: {
            type: type.STRING
        },
        Column_Names: {
            type: type.STRING
        },
        column_nm: {
            type: type.STRING
        },
        Value: {
            type: type.FLOAT
        },
        Value2: {
            type: type.FLOAT
        },
        Coefficient: {
            type: type.FLOAT
        },
        Coefficient_abs: {
            type: type.FLOAT
        },
        mean: {
            type: type.FLOAT
        },
        std: {
            type: type.FLOAT
        },
        intercept: {
            type: type.FLOAT
        },
        mean_sales: {
            type: type.FLOAT
        },
        std_sales: {
            type: type.FLOAT
        },
        rank: {
            type: type.BIGINT
        },
        sales_target: {
            type: type.FLOAT
        },
        sales_forecast: {
            type: type.FLOAT
        }

    },{underscored: true, tablename: 'sql_Final_simulator_input',
     schema: 'ecom',
     freezeTableName: true, timestamps: false})
}