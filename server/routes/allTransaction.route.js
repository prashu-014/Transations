const express = require('express')
const router = express.Router()

const allTransationData = require('../controller/allTransation.controller')

router.route("/").get(allTransationData)

module.exports = router;