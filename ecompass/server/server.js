const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');

const db = require('./config/db');

const app = express();

app.use(cors());
app.use(morgan('tiny'));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '.././build')));
app.use('/', require('./router/route'));

db.testConnection = async function () {
    try {
        await db.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

db.testConnection();

db.sync().then(()=>{
    console.log('DB connection successfull')
    app.listen(4000, ()=>{
        console.log('Server running on port 4000 ...');
    })
})

