
/**
 * ! THIS IS A TEST ROUTE
 */

const express = require('express')
const router = express.Router()

const { fetchFromGithub } = require('../controllers/user/fetchFromGithub')

router.get('/get_data_from_github', fetchFromGithub)

module.exports = router