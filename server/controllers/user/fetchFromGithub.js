const { Octokit, App } = require('octokit')
const axios = require('axios')

const fetchFromGithub = async (req, res) => {

    // instantiate a octokit instance

    // const accessToken = req.headers['access-token']
    const accessToken = req.headers['access-token']

    const octokit = new Octokit({ auth: accessToken})

    // get the user's username
    // const { data: { login }} = await octokit.rest.users.getAuthenticated();
    const { data } = await octokit.rest.users.getAuthenticated();
    // console.log("Hello, %s", login);
    console.log(data)
    
    const { repos_url } = data
    const repos = await axios.get(repos_url)
    // console.log(repos)

    // send the username to the client
    res.send(repos_url)
}

module.exports = {
    fetchFromGithub
}