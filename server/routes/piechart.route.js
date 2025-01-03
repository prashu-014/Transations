const express = require('express')
const router = express.Router()

const pichart = require('../controller/piechart.controller')

router.route("/").get(pichart)

module.exports = router;