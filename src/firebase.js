import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCMR2ow8MF3kaMNfu_Jisdsa4j_XnICB8U",
  authDomain: "sai-portfolio-e0593.firebaseapp.com",
  projectId: "sai-portfolio-e0593",
  storageBucket: "sai-portfolio-e0593.appspot.com",
  messagingSenderId: "510022042047",
  appId: "1:510022042047:web:b08b0de42d223dca99610a",
  measurementId: "G-08BXLZKE31",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
