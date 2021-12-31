const admin = require('../firebase')

const authMiddleware = async (req, res, next) => {
    
    console.log(`Calling the auth middleware`)
    
    // get the authorization header
    const headerToken = req.headers.authorization

    // check if the header is undefined
    if(!headerToken) {
        return res.send('No token found').status(401)
    }
    
    // check if the header isn't Bearer
    if(headerToken && headerToken.split(' ')[0] !== 'Bearer') {
        return res.send('Invalid token').status(401)
    }

    // get the bearer token
    const token = headerToken.split(' ')[1]

    // verify the bearer token
    admin
        .auth()
        .verifyIdToken(token)
        .then(() => {
            // get the github accessToken sent in the header
            const accessToken = req.headers['access-token']
            console.log(`RECIEVED: access token: ${accessToken}`)

            next()
        })
        .catch(err => console.log(err))
    
}

module.exports = authMiddleware