import firebase from 'firebase'

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: 'AIzaSyB7-7YJT57oKya6RvowBducg05DUbJF0FM',
    authDomain: 'shop-review-app-d49c3.firebaseapp.com',
    projectId: 'shop-review-app-d49c3',
    storageBucket: 'shop-review-app-d49c3.appspot.com',
    messagingSenderId: '833908244520',
    appId: '1:833908244520:web:bd669edf91481c6757751d',
  })
}

export default firebase
