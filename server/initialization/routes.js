const express = require('express')
const homeRouter = require('../routes/home')
const getDataFromGithubRouter = require('../routes/getDataFromGithub')

// Calling this function initializes all the routes
const initialiseRoutes = (app) => {

    // app.use('/', homeRouter)
    app.use('/api', getDataFromGithubRouter)

}

module.exports = initialiseRoutes