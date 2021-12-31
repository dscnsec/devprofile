const mongoose = require('mongoose')

const githubRepoSchema = mongoose.Schema({
    name:           { type: String, required: true },
    html_url:       { type: String, required: true },
    description:    { type: String, required: true },
    updated_at:     { type: String, required: true },
})

module.exports = {
    githubRepoSchema
}