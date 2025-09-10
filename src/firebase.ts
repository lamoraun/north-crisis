import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyDr3djGxrM7Ha3-xt0czjU077Cmh78YL_c",
	authDomain: "north-crisis.firebaseapp.com",
	projectId: "north-crisis",
	storageBucket: "north-crisis.firebasestorage.app",
	messagingSenderId: "432138421130",
	appId: "1:432138421130:web:0cb6dcf0fd0146bfe1be73"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
