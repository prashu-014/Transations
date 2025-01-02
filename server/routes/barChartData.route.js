const express = require('express')
const router = express.Router()
const barChartData = require('../controller/barChartData.controller')

router.route("/").get(barChartData)

module.exports = router;