const express = require('express')
const router = express.Router()

const { createProfile } = require('../controllers/user/profileOperations')

router.post('/create', createProfile)

module.exports = router