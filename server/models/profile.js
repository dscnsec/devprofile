const Joi = require('joi')
const mongoose = require('mongoose')
// const { githubRepoSchema } = require('../models/githubRepo')
// const { externalProfileLinksSchema } = require('../models/externalProfileLinks')

const profileSchema = new mongoose.Schema({
    id:                   { type: String, required: true },
    avatar_url:           { type: String },
    name:                 { type: String, required: true },
    company:              { type: String },
    college:              { type: String },
    blog:                 { type: String },
    location:             { type: String },
    email:                { type: String },
    bio:                  { type: String },
    portfolio:            { type: String },
 // externalProfileLinks: { type: externalProfileLinksSchema },
    externalProfileLinks: { type: {
                                github_id:       { type: String },
                                linkedin_id:     { type: String },
                                codechef_id:     { type: String },
                                hackerrank_id:   { type: String },
                                leetcode_id:     { type: String },
                                twitter_id:      { type: String },
                                medium_id:       { type: String },
                            }},
 // repos:                { type: [githubRepoSchema] },
    repos:                { type: [{
                                name:           { type: String, required: true },
                                html_url:       { type: String, required: true },
                                description:    { type: String, required: true },
                                updated_at:     { type: String },
                            }]},

})

const Profile = mongoose.model('Profile', profileSchema)

const validate = (profile) => {

    const externalProfileLinks =  Joi.object().keys({
        github_id:       Joi.string().uri(),
        linkedin_id:     Joi.string().uri(),
        codechef_id:     Joi.string().uri(),
        hackerrank_id:   Joi.string().uri(),
        leetcode_id:     Joi.string().uri(),
        twitter_id:      Joi.string().uri(),
        medium_id:       Joi.string().uri(),
    })

    const githubRepo =  Joi.object().keys({
        name:           Joi.string().required(),
        html_url:       Joi.string().required(),
        description:    Joi.string().required(),
        updated_at:     Joi.string(),
    })

    const githubRepos = Joi.array().items(githubRepo)

    const schema =              Joi.object({
        id:                     Joi.string().required(),
        avatar_url:             Joi.string(),
        name:                   Joi.string().required(),
        company:                Joi.string(),
        blog:                   Joi.string(),
        location:               Joi.string(),
        email:                  Joi.string().email(),
        bio:                    Joi.string(),
        college:                Joi.string(),
        portfolio:              Joi.string(),
        externalProfileLinks:   externalProfileLinks,
        repos:                  githubRepos,
    })

    return schema.validate(profile)
}

module.exports = {
    Profile,
    validate,
    profileSchema
}