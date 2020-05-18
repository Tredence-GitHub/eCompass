const Sequelize = require('sequelize');

const db = new Sequelize('accelerator_mock', 'root', 'ind123', {
    host: 'localhost',
    dialect: 'mysql',
    pool: {
        max: 10,
        min: 5,
        idle: 1000
    },
});

module.exports = db;