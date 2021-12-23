const { Profile, validate } = require('../../models/profile')

const createProfile = async (req, res) => {

    console.log(req.body)

    const { error } = validate(req.body)

    if (error) return res.status(400).send(error.details[0].message)

    let profile = new Profile({
        id: req.body.id,
        avatar_url: req.body.avatar_url,
        name: req.body.name,
        company: req.body.company,
        blog: req.body.blog,
        location: req.body.location,
        email: req.body.email,
        bio: req.body.bio,
        externalProfileLinks: req.body.externalProfileLinks,
        repos: req.body.repos,
    })

    profile
        .save()
        .then((profile) => res.send(profile))
        .catch(err => {
            res.status(400).send('failed to save profile')
            console.log(err)
        })
}

module.exports = {
    createProfile
}