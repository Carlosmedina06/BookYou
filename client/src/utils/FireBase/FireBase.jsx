import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyCTNgai_cLX11phzztTcWIXUZ2pzRoWuI4',
  authDomain: 'henry-bookyou.firebaseapp.com',
  projectId: 'henry-bookyou',
  storageBucket: 'henry-bookyou.appspot.com',
  messagingSenderId: '940840951302',
  appId: '1:940840951302:web:205cd0dacf9cdc4020ed87',
  measurementId: 'G-Y77F2ECNED',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
