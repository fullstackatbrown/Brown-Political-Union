import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {
  getFirestore,
  doc,
  collection,
  query,
  getDocs,
  updateDoc,
} from "firebase/firestore";

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

export class Firebase {
  firestore;
  auth;

  constructor() {
    const app = initializeApp(config);
    this.firestore = getFirestore(app);
    this.auth = getAuth(app);
  }

  getAllEvents = async () => {
    const q = query(collection(this.firestore, "events"));
    const querySnapshot = await getDocs(q);
    let ret = [];
    querySnapshot.forEach((doc) => {
      ret.push(doc.data());
    });
    return ret;
  };

  getAllEventDocs = async () => {
    const q = query(collection(this.firestore, "events"));
    const querySnapshot = await getDocs(q);
    let ret = [];
    querySnapshot.forEach((doc) => {
      ret.push(doc);
    });
    return ret;
  };

  modifyEvent = async (id, newEvent) => {
    const documentRef = doc(this.firestore, "events", id);
    await updateDoc(documentRef, newEvent);
  };

  signIn = async (email, password) => {
    signInWithEmailAndPassword(this.auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        return user;
      })
      .catch((error) => {
        console.error(error.code, error.message);
      });
  };
}
