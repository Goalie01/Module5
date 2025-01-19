const express = require('express')
const router = express.Router()

router.get('/example1', (req, res) => {
    res.send('Hello World!')
})

router.get('/example2', (req, res) => {
    res.send('Hello World!2')
})

module.exports = router