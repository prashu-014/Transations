const express = require('express')
const router = express.Router()

const transationData = require('../controller/transation.controller')

router.route("/").get(transationData)

module.exports = router;