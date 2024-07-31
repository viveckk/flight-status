import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyClBvCLHdfvKeWjAoi2kN5lrLcxIDzIbfg",
  authDomain: "flight-status-interglobe.firebaseapp.com",
  projectId: "flight-status-interglobe",
  storageBucket: "flight-status-interglobe.appspot.com",
  messagingSenderId: "669844759623",
  appId: "1:669844759623:web:efa0e791a06c8118c2bd62",
  measurementId: "G-RWTHWBX9SN"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
