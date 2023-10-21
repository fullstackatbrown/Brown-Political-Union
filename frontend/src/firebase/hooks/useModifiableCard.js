import { deleteDoc, doc, getFirestore, updateDoc } from "firebase/firestore";
import { useState } from "react";

export function useModifiableCard(collection, id, baseData) {
    // Only updates the image when data is written to firestore
    const [currentImage, setCurrentImage] = useState(baseData.image);
    const [currentData, setCurrentData] = useState(baseData);

    const modifyCard = async () => {
        setCurrentImage(currentData.image);
        const firestore = getFirestore()
        const documentRef = doc(firestore, collection, id);
        await updateDoc(documentRef, currentData);
    };

    const deleteCard = async () => {
        const firestore = getFirestore()
        const documentRef = doc(firestore, collection, id);
        await deleteDoc(documentRef);
    };

    return {
        currentImage,
        currentData,
        setCurrentData,
        modifyCard,
        deleteCard,
    }
}