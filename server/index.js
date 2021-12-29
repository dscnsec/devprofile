const express = require('express')
const initializeRoutes = require('./initialization/routes')
const initializeDB = require('./initialization/db')
// const initializeLogger = require('./initialization/logging')
const logger = require('./initialization/logging')
const cors = require('cors')
const authMiddleware = require('./middleware/auth')
const config = require('./config')

// Set variables and configs
const PORT = config.PORT
const DATABASE_CONNECTION_STRING = config.DATABASE_CONNECTION_STRING

// Initialize the app
const app = express()

// Initialize the middlewares
app.use(cors())
app.use(express.json())
// app.use('/', authMiddleware)

// Initialize the logger
// const logger = initializeLogger(DATABASE_CONNECTION_STRING)
// module.exports.logger = logger

// Initialize the routes
initializeRoutes(app)

// Initialize the db
initializeDB(DATABASE_CONNECTION_STRING)

// Start the server
app.listen(PORT, () => {
    logger.info(`Server is up and running on port ${PORT}`)
})