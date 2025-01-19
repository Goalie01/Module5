// app.js - new file at top level
const express = require('express')
const app = express()
const port = 3050

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');


// map all routes to the express app
const calculatorRoute = require('./routes/calculatorRoute');
app.use('/calculator', calculatorRoute);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


// export the app
module.exports = app;