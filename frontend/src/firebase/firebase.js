import { initializeApp } from "firebase/app";
import { getFirestore, collection, query, getDocs } from "firebase/firestore";

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

  constructor() {
    const app = initializeApp(config);
    this.firestore = getFirestore(app);
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
}
