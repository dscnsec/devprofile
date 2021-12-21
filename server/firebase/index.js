const admin = require('firebase-admin')
const credentials = require('../config/credentials.json')

// Initialize the app with a service account, granting admin privileges
admin.initializeApp({
    credential: admin.credential.cert(credentials),
})

module.exports = admin