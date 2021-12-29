const mongoose = require('mongoose')

const externalProfileLinksSchema = new mongoose.Schema({
    github_id:       { type: String },
    linkedin_id:     { type: String },
    codechef_id:     { type: String },
    hackerrank_id:   { type: String },
    twitter_id:      { type: String },
    medium_id:       { type: String },
})

module.exports = {
    externalProfileLinksSchema
}