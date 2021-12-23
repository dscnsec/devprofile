const mongoose = require('mongoose')

const DATABASE_CONNECTION_STRING = 'mongodb+srv://admin:cadbury-devprofile-admin@devprofile.ftrgk.mongodb.net/dev?retryWrites=true&w=majority'

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