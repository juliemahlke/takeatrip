import firebase from 'firebase/app'
import 'firebase/firestore'

var firebaseConfig = {
  apiKey: 'AIzaSyAQ2k6OKd8zHl8z0pwoqxczTeE3NuGnjlI',
  authDomain: 'julies-trips.firebaseapp.com',
  databaseURL: 'https://julies-trips.firebaseio.com',
  projectId: 'julies-trips',
  storageBucket: 'julies-trips.appspot.com',
  messagingSenderId: '523571127877',
  appId: '1:523571127877:web:e1839d80aa27a6d078252c',
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()

export const tripsRef = db.collection('trips')
tripsRef.add({ title: 'Hamburg', date: '01.05.20' })
