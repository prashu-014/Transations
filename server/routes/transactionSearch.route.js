const express = require('express')
const router = express.Router()

const transationSearch = require('../controller/transactionSearchController')

router.route("/").get(transationSearch)

module.exports = router;