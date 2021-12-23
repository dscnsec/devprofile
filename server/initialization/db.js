const mongoose = require('mongoose')

const DATABASE_CONNECTION_STRING = process.env.DATABASE_CONNECTION_STRING

const initializeDB = () => {
    mongoose.connect(DATABASE_CONNECTION_STRING, 
        { 
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        .then(() => console.log('Connected to database'))
        .catch((err) => console.log(err))
}

module.exports = initializeDB