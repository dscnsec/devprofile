const mongoose = require('mongoose')

const initializeDB = (DATABASE_CONNECTION_STRING) => {
    
    mongoose.connect(DATABASE_CONNECTION_STRING, 
        { 
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        .then(() => console.log('Connected to database'))
        .catch((err) => console.log(err))
}

module.exports = initializeDB