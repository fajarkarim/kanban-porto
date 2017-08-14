import Firebase from 'firebase'

var config = {
  apiKey: 'AIzaSyCcfYVFV31_UnKJfBL24uawHGKz_Z26sFE',
  authDomain: 'awesome-presentation.firebaseapp.com',
  databaseURL: 'https://awesome-presentation.firebaseio.com',
  projectId: 'awesome-presentation',
  storageBucket: 'awesome-presentation.appspot.com',
  messagingSenderId: '1021392727967'
}

const firebaseApp = Firebase.initializeApp(config)
const db = firebaseApp.database()

export default db
