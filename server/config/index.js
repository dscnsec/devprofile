const dotenv = require('dotenv')

dotenv.config()

const devConfig = {
    NODE_ENV: 'development',
    PORT: process.env.PORT || 8000,
    DATABASE_CONNECTION_STRING: process.env.DATABASE_CONNECTION_STRING,
}

module.exports = devConfig