const Sequelize = require('sequelize');

// const db = new Sequelize('accelerator_mock', 'root', 'ind123', {
//     host: 'localhost',
//     dialect: 'mysql',
//     pool: {
//         max: 10,
//         min: 5,
//         idle: 1000
//     },
// });



const db = new Sequelize('ecompass-acc-db', 'ecompass', 'Gohome@09',{
    host: 'ecompass-acc-server.database.windows.net',
    dialect: 'mssql',
    port: '1433',
    dialectOptions: { 
        options: {
          encrypt: true
        }
      },
    ssl: 'true',
    pool: {
                max: 10,
                min: 5,
                idle: 1000
        },
}

)

module.exports = db;