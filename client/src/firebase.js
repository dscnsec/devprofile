// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import firebaseConfig from "./firebaseConfig"



// Initialize Firebase
initializeApp(firebaseConfig)
const auth = getAuth()

export { auth }