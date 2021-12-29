const express = require('express')
const router = express.Router()

const { createProfile, editProfile } = require('../controllers/user/profileOperations')

router.post('/create', createProfile)
router.put('/edit/:id', editProfile)

module.exports = router