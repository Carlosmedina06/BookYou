import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyCtD1QlzfH6dSlaEwQeY_sIfc4ny_ZEZHY',
  authDomain: 'bookyou-pf-henry.firebaseapp.com',
  projectId: 'bookyou-pf-henry',
  storageBucket: 'bookyou-pf-henry.appspot.com',
  messagingSenderId: '200304958791',
  appId: '1:200304958791:web:134f81a1a42c3e5b1cc062',
  measurementId: 'G-2G5EZ42S3R',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
