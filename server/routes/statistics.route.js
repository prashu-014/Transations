const express = require('express')
const router = express.Router()

const statasticsController = require('../controller/statistice.controller')

router.route('/').get(statasticsController)

module.exports = router;
