const express = require('express')
const homeRouter = require('../routes/home')
const getDataFromGithubRouter = require('../routes/getDataFromGithub')
const profileRouter = require('../routes/profile')

// Calling this function initializes all the routes
const initialiseRoutes = (app) => {

    // app.use('/', homeRouter)
    app.use('/api', getDataFromGithubRouter)
    app.use('/api/profile', profileRouter)

}

module.exports = initialiseRoutes