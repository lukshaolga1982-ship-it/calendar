import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig={apiKey:"AIzaSyAzb53_TvGiRKXJhMTaC1fkk7VQe50HTV0",authDomain:"calendar-65f48.firebaseapp.com",projectId:"calendar-65f48",storageBucket:"calendar-65f48.firebasestorage.app",messagingSenderId:"596741678899",appId:"1:596741678899:web:81a6548b3ac18090558046",measurementId:"G-CSBXVFPV1B"};
export const app=getApps().length?getApp():initializeApp(firebaseConfig);
export const auth=getAuth(app);export const db=getFirestore(app);export const storage=getStorage(app);export const googleProvider=new GoogleAuthProvider();
