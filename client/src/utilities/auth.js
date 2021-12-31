import { auth } from '../firebase'
import { GithubAuthProvider, signInWithPopup, getAuth, signOut } from 'firebase/auth'

/**
 * * Complete Signing in with Github Logic
 */
export const signInWithGitHub = async (onSuccessfulLogin) => {

    // Initialised Github Auth Provider
    const provider = new GithubAuthProvider()

    // Create popup signin
    await signInWithPopup(auth, provider)
        .then(async (result) => {

            // Get the access-token and user information from the response
            const credential = GithubAuthProvider.credentialFromResult(result)
            const token = credential.accessToken
            const user = result.user
            console.log(token)
            console.log(user)

            if (token) {
                // Get the Firebase ID Token for verification in the backend
                const idToken = await auth.currentUser.getIdToken(true)
                console.log('ID Token is: ' + idToken)
		console.log('Access Token is: ' + token)
                
                // Save the access-token and ID Token to localStorage
                localStorage.setItem('dev-profile-access-token', token)
                localStorage.setItem('dev-profile-id-token', idToken)

                // Call the callback
                onSuccessfulLogin(token)
            }
        }, (err) => { console.log(err) })
}

/**
 * TODO: Complete Signing out Logic
 */
export const logOut = (callback) => {
    const auth = getAuth()

    signOut(auth)
        .then(() => {
            console.log('Signed out')
            callback()
        })
        .catch(err => console.log(err))
}