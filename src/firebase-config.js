import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};

const getFireBaseConfig = () => {
  if (!firebaseConfig || !firebaseConfig.apiKey) {
    throw new Error(
      "No Firebase configuration object provided. Add your web app's configuration object" +
        " tofirebase-config.js"
    );
  } else {
    return firebaseConfig;
  }
};

const firebaseApp = initializeApp(getFireBaseConfig());

export const db = getFirestore(firebaseApp);
export const usersCollectionsRef = collection(db, "users");
export const congratulationMessagesCollectionsRef = collection(
  db,
  "congratulationMessages"
);

export const storage = getStorage(firebaseApp);
