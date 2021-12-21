const express = require('express')
const initializeRoutes = require('./initialization/routes')
const cors = require('cors')
const authMiddleware = require('./middleware/auth')

// Set variables and configs
const PORT = process.env.PORT || 8000

// Initialize the app
const app = express()

// Initialize the middlewares
app.use(cors())
app.use(express.json())
app.use('/', authMiddleware)

// Initialize the routes
initializeRoutes(app)

// Start the server
app.listen(PORT, () => {
    console.log(`Server is up and running on port ${PORT}`)
})