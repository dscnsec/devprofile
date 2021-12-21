const { Octokit, App } = require('octokit')

const fetchFromGithub = async (req, res) => {

    // instantiate a octokit instance
    const octokit = new Octokit({ auth: req.headers['access-token']})

    // get the user's username
    const { data: { login }} = await octokit.rest.users.getAuthenticated();
    console.log("Hello, %s", login);

    // send the username to the client
    res.send(`username: ${login}`)
}

module.exports = {
    fetchFromGithub
}