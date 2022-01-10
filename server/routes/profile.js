const express = require('express')
const router = express.Router()

const { createProfile, editProfile, findProfile } = require('../controllers/user/profileOperations')

router.post('/create', createProfile)
router.put('/edit/:id', editProfile)
router.get('/find/:id', findProfile)

module.exports = router