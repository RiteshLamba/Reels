import firebase from "firebase/app"
import "firebase/auth"
import 'firebase/firestore'
import 'firebase/storage'
firebase.initializeApp({
  apiKey: "AIzaSyCXr3lWZlshs0HBoeuRN1XuL2a_WFX7lr8",
  authDomain: "resume-ef643.firebaseapp.com",
  projectId: "resume-ef643",
  storageBucket: "resume-ef643.appspot.com",
  messagingSenderId: "827605176464",
  appId: "1:827605176464:web:8880165e9b10d16b7b4815"
})
export const auth = firebase.auth()
const firestore = firebase.firestore();
export const database ={
  users:firestore.collection('users'),
  posts:firestore.collection('posts'),
  comments:firestore.collection('comments'),
  getCurrentTimeStamp: firebase.firestore.FieldValue.serverTimestamp,
  formatDoc:doc=>{
    return {id:doc.id,...doc.data()}
  }
}
export const storage = firebase.storage();
export default firebase