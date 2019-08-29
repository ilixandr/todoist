import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyBZm12NQcST29CJnjx1-_VY3p6uXqFsFrw",
    authDomain: "todoist-e64d3.firebaseapp.com",
    databaseURL: "https://todoist-e64d3.firebaseio.com",
    projectId: "todoist-e64d3",
    storageBucket: "todoist-e64d3.appspot.com",
    messagingSenderId: "254280441901",
    appId: "1:254280441901:web:59ad9e8c5abb7a71"
});
export { firebaseConfig as firebase };