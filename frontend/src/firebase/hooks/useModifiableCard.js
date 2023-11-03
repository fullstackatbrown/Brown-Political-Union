import { deleteDoc, doc, getFirestore, updateDoc } from "firebase/firestore";
import { useState } from "react";
import { toast } from "react-toastify";

export function useModifiableCard(collection, id, baseData, toastTitle) {
    // Only updates the image when data is written to firestore
    const [currentImage, setCurrentImage] = useState(baseData.image);
    const [currentData, setCurrentData] = useState(baseData);

    const modifyCard = async () => {
        toast.success(`${toastTitle} modified!`);
        setCurrentImage(currentData.image);
        const firestore = getFirestore()
        const documentRef = doc(firestore, collection, id);
        await updateDoc(documentRef, currentData);
    };

    const deleteCard = async () => {
        toast.success(`${toastTitle} deleted`);
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