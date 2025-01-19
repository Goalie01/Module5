const express = require('express')
const productsController = require('../controllers/productsControllers')
const router = express.Router()

router.get('/', (req, res) => {
    productsController.getProducts(req, res)
})

module.exports = router
