import { collection, getFirestore, onSnapshot } from "@firebase/firestore";
import { useEffect, useState } from "react";

export function useCollection(path) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const unsubscribe = onSnapshot(collection(db, path), (querySnapshot) => {
      const res = [];
      querySnapshot.forEach((doc) => {
        res.push({id: doc.id, ...doc.data() });
      });
      setData(res);
    });

    return () => unsubscribe();
  }, [path]);

  return data;
}