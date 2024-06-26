
import {getAuth} from 'firebase/auth'
import {firebaseConfig} from './config/firebaseConfig'

// Initialize Firebase connects to the project we setup
// connect to the app... created
const app = initializeApp(firebaseConfig)

// Initialize Realtime Database and get a reference to the service
// connecting  to the RTDB   ---> ref
const db = getDatabase(app)
const auth = getAuth(app)
export {auth, db}
