import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyCIYcQ-pCSa9eZGHxuRZayvGkPR-D7VYZs",
    authDomain: "bookshelf-12team.firebaseapp.com",
    projectId: "bookshelf-12team",
    storageBucket: "bookshelf-12team.appspot.com",
    messagingSenderId: "31672773196",
    appId: "1:31672773196:web:c1faba0517a12a4bd762e9"
  };
  // Initialize Firebase
 export const app = initializeApp(firebaseConfig);