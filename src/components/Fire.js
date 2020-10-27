import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyC49MIqUDYGi4S3ZnZSXy7e6iJtDLbqEcM",
    authDomain: "first-project-32fc7.firebaseapp.com",
    databaseURL: "https://first-project-32fc7.firebaseio.com",
    projectId: "first-project-32fc7",
    storageBucket: "first-project-32fc7.appspot.com",
    messagingSenderId: "484698714432",
    appId: "1:484698714432:web:6af49b067d92908e790aa5",
    measurementId: "G-WXZBQ2ECCL"
};

const fire=firebase.initializeApp(firebaseConfig);

export default fire;