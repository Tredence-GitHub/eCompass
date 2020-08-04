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
const RecommendationsModel = require('../models/recommendationDb');
const WorkbenchModel = require('../models/workbenchDb');
const SimulatorModel = require('../models/simulatorDb');
const SaveSimulationModel = require('../models/simulatorSavedDb');

const RecommendationsTable = RecommendationsModel(db, Sequelize);
const WorkbenchTable = WorkbenchModel(db, Sequelize);
const SimulatorTable = SimulatorModel(db, Sequelize);
const SaveSimulationTable = SaveSimulationModel(db, Sequelize);

WorkbenchTable.hasOne(RecommendationsTable, {foreignKey: 'sku_id'});

module.exports = {
  db,
  RecommendationsTable,
  WorkbenchTable,
  SimulatorTable,
  SaveSimulationTable
};