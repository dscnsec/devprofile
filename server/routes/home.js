const express = require('express')
const router = express.Router()

// Import controllers
const { getHome } = require('../controllers/home')

// Define routes
router.get('/', getHome)

module.exports = router