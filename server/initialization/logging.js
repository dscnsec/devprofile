const winston = require('winston')
require('winston-mongodb')
const { NODE_ENV, DATABASE_CONNECTION_STRING } = require('../config/index')

const initializeLogger = (DATABASE_CONNECTION_STRING) => {
console.log(DATABASE_CONNECTION_STRING)
    const logger = winston.createLogger({
        level: 'info',
        format: winston.format.json(),
        // defaultMeta: { service: 'user-service' },
        transports: [
            new winston.transports.File({ filename: 'error.log', level: 'error' }),
            new winston.transports.File({ filename: 'all_logs.log' }),
            new winston.transports.MongoDB({ 
                db: DATABASE_CONNECTION_STRING, 
                options: { useNewUrlParser: true, useUnifiedTopology: true },
                level: 'warn' 
            })
        ],
        exceptionHandlers: [
            new winston.transports.File({ filename: 'exceptions.log' }),
        ],
        rejectionHandlers: [
            new winston.transports.File({ filename: 'rejections.log' }),
        ]
    })

    if(NODE_ENV !== 'production') {
        logger.add(
            new winston.transports.Console({
                format: winston.format.simple()
            }))      
    }

    console.log(`Initialized logger`)

    return logger

}

// module.exports = initializeLogger
module.exports = initializeLogger(DATABASE_CONNECTION_STRING)