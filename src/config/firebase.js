import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    // apiKey: process.env.REACT_APP_FIREBASE_KEY,
    apiKey: 'AIzaSyBbaPq-X0QfUJW-ZJPb-X5p8kiLTexhDPs',
    authDomain: "mini-project-react-3de27.firebaseapp.com",
    projectId: "mini-project-react-3de27",
    storageBucket: "mini-project-react-3de27.appspot.com",
    messagingSenderId: "488341078749",
    appId: "1:488341078749:web:f4d2c4f4bbfc54e4225134"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };