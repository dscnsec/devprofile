import React from 'react';
import { useNavigate } from 'react-router-dom'
import classes from '../App.module.css';
import { signInWithGitHub as GithubSignIn } from '../utilities/auth'
import { useSelector, useDispatch } from 'react-redux'
import { editDetails } from '../redux/userDetailsSlice'
import { Octokit } from 'octokit'

const Login = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const userDetails = useSelector(state => state.userDetails)
  
  const onSuccessfulLogin = async (accessToken) => {

      // octokit initialization with access key
      const octokit = new Octokit({ auth: accessToken})
      
      // user details from github
      const { data } = await octokit.rest.users.getAuthenticated();
      console.log(data)
      
      console.log(userDetails)
      const newData = {}
      // id
      data.login && (newData.id = data.login)
      // avatar_url
      data.avatar_url && (newData.avatar_url = data.avatar_url)
      // name
      data.name && (newData.name = data.name)
      // company
      data.company && (newData.company = data.company)
      // blog
      data.blog && (newData.blog = data.blog)
      // location
      data.location && (newData.location = data.location)
      // email
      data.email && (newData.email = data.email)
      // bio
      data.bio && (newData.bio = data.bio)
      // externalProfileLinks
      // repos

      dispatch(editDetails(newData))
      // console.log(userDetails)

      navigate('/form')

  }

  const signInWithGitHub = () => {
      GithubSignIn(onSuccessfulLogin)
  }
  return (
    <div className={classes.App}>
      <div className={classes.left}>
        <img src='/images/login.png' alt='login image devprofile' />

      </div>
      <div className={classes.right}>
        <div className={classes.text}>
          <div className={classes.textHi}>
            hi, 👋
          </div>
          <div className={classes.textWelcome}>
            welcome to devprofile
          </div>
        </div>
        <button>
          <img src='/images/github.png' />
          <div onClick={signInWithGitHub} className={classes.buttonText}>
            continue with github
          </div>

        </button>
        <div className={classes.orLine}>
          <div className={classes.line}>

          </div>
          <div className={classes.orText}>
            or
          </div>
          <div className={classes.line}>

          </div>
        </div>
        <button>
          <img src='/images/gitlab.png' />
          <div className={classes.buttonText}>
            continue with gitlab
          </div>
        </button>
      </div>
    </div>

  )
}

export default Login