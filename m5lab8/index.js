const express = require('express')
const PproductsRoutes = require('./routes/productsRoutes');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

const app = express()
const port = 3050

app.use('/', express.static('public'))

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use('/products', productsRoutes);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

// export the app
module.exports = app;

