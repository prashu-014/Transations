const express = require('express')

const transationData = require('../controller/transation.controller')

const router = express.Router()

router.route("/").get(transationData)

module.exports = router;