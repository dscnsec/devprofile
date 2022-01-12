const { Profile, validate } = require('../../models/profile')
const logger = require('../../initialization/logging')
const { Octokit, App } = require('octokit')

const createProfile = async (req, res, next) => {
console.log(req.body)

    Profile
        .findOne({id: req.body.id})
        .then(user => {
            if(user) {
                return res.status(400).send('User already exists')
            } else {
                logger.info(req.body)

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
                    college: req.body.college,
                    portfolio: req.body.portfolio,
                })

                profile
                    .save()
                    .then((profile) => res.send(profile._id))
                    .catch(err => {
                        res.status(400).send('failed to save profile')
                        next(err)
                    })
            }
        })
        .catch(err => {
            next(err)
        })

    
}

const editProfile = async (req, res, next) => {
    console.log(`editing profile`)

    const providedID = req.params.id
    
    let login
    
    try {
        const accessToken = req.headers['access-token']
        const octokit = new Octokit({ auth: accessToken})

        const { data: { login: username } } = await octokit.rest.users.getAuthenticated()
        login = username
        delete ocktokit

    } catch(ex) {
        res.status(400).send('Invalid access token. Make sure you are signed in')
    }
    
    if(!providedID) {
        return res.status(400).send(`No ID Provided`)
    }
    
    if(providedID !== login) {
        return res.status(400).send(`Invalid ID: You are not permitted to edit somebody else's profile`)
    }


    console.log(`recieved update request from ${login}`)
    console.log(req.body)

    // Profile
    //     .findOneAndUpdate(
    //         { id: login },
    //         { $set: req.body },
    //     ).then(
    //             profile => {
    //                 if (profile) {
    //                     res.send(profile)
    //                 } else {
    //                     res.status(400).send('Profile not found')
    //                 }
    //             } 
    //         )
    //         .catch(err => next(err))

    const profile = await Profile.findOne({ id: login })

    for(const [field, value] of Object.entries(req.body)) {
        // console.log(`property: ${field}`)
        // console.log(`value: ${value}`)

        if(field === 'externalProfileLinks') {
            
            for(const [externalProfileName, externalProfileLink] of Object.entries(value)) {
                // console.log(`externalProfileName: ${externalProfileName}`)
                // console.log(`externalProfileLink: ${externalProfileLink}`)

                profile[field][externalProfileName] = externalProfileLink
            }


        } else if (field === 'repos') {
            return res.status(400).send('Cannot edit repos')
        } else {
            profile[field] = value
        }

    }

    await profile.save()

    return res.send(profile)


}

const findProfile = (req, res) => {
    const { id } = req.params

    Profile
        .findOne({ id })
        .then(user => {
            
            let bodyToSend = {}

            if (user) {
                console.log(user)
                bodyToSend.data = user._doc
                bodyToSend.found = true

                

            } else {
                bodyToSend.found = false
            }
            return res.send(bodyToSend)
        })
        .catch(err => {
            res.status(400).send('Something went wrong')
            logger.error(err)
        })
}

module.exports = {
    createProfile,
    editProfile,
    findProfile
}