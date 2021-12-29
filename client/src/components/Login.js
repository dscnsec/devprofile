import React from 'react';
import { useNavigate } from 'react-router-dom'
import classes from '../App.module.css';
import { signInWithGitHub as GithubSignIn } from '../utilities/auth'


const Login = () => {
  const navigate = useNavigate()

  const onSuccessfulLogin = () => {
      // Navigate to the test page
      navigate('/test')
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
