import { createContext, useContext } from "react";

export const FirebaseContext = createContext({});

export const useFirebase = () => {
  const firebase = useContext(FirebaseContext);
  return firebase;
};
