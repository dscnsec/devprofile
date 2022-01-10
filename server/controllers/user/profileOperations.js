const { Profile, validate } = require('../../models/profile')
const logger = require('../../initialization/logging')

const createProfile = async (req, res, next) => {


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

const editProfile = async (req, res) => {
    console.log(`editing profile`)
    
    // TODO: check if the user is the owner of the profile sent in the request

    // TODO: validate the profile sent in the request
    // const { error } = validate(req.body)
    // if (error) return res.status(400).send(error.details[0].message)
    
    // TODO: make the updated values object
    const editedValues = {}

    console.log(req.params.id)

    for (key in req.body) {

        if (key === 'externalProfileLinks') {
            console.log(key, '-->')
            console.log(req.body[key], '<--')

            // for (x of req.body[key]) {
            //     console.log('0-0---',x)
            // }

        } else {
            console.log(key, req.body[key])
        }
    }

    // TODO: update the profile in the DB
    // Profile
    //     .findByIdAndUpdate(req.params.id, {
    //         ...editedValues
    //     })
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