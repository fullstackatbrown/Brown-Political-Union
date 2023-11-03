import { deleteDoc, doc, getFirestore, updateDoc } from "firebase/firestore";
import { useState } from "react";
import { toast } from "react-toastify";

export function useModifiableCard(collection, id, baseData, toastTitle) {
    // Only updates the image when data is written to firestore
    const [currentImage, setCurrentImage] = useState(baseData.image);
    const [currentData, setCurrentData] = useState(baseData);

    const modifyCard = async () => {
        setCurrentImage(currentData.image);
        const firestore = getFirestore()
        const documentRef = doc(firestore, collection, id);
        try {
            await updateDoc(documentRef, currentData);
            toast.success(`${toastTitle} modified!`);
        } catch (error) {
            console.error(error)
            toast.error(`Error modifying ${toastTitle}`);
        }
    };

    const deleteCard = async () => {
        const firestore = getFirestore()
        const documentRef = doc(firestore, collection, id);
        try {
            await deleteDoc(documentRef);
            toast.success(`${toastTitle} deleted`);
        } catch (error) {
            console.error(error)
            toast.error(`Error deleting ${toastTitle}`);
        }
    };

    return {
        currentImage,
        currentData,
        setCurrentData,
        modifyCard,
        deleteCard,
    }
}