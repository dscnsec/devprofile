const express = require('express')
const initializeRoutes = require('./initialization/routes')
const initializeDB = require('./initialization/db')
const cors = require('cors')
const authMiddleware = require('./middleware/auth')
const dotenv = require('dotenv')

// Load environment variables from .env file
dotenv.config()

// Set variables and configs
const PORT = process.env.PORT || 8000
const DATABASE_CONNECTION_STRING = process.env.DATABASE_CONNECTION_STRING

// Initialize the app
const app = express()

// Initialize the middlewares
app.use(cors())
app.use(express.json())
// app.use('/', authMiddleware)

// Initialize the routes
initializeRoutes(app)

// Initialize the db
initializeDB(DATABASE_CONNECTION_STRING)

// Start the server
app.listen(PORT, () => {
    console.log(`Server is up and running on port ${PORT}`)
})