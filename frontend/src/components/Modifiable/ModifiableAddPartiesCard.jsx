import { addDoc, collection, getFirestore } from "firebase/firestore";
import React, { useState } from "react";

const ModifiableAddPartiesCard = () => {
    const firestore = getFirestore();
    const [currentImage, setCurrentImage] = useState();
    const [newEvent, setNewEvent] = useState({
        name: "",
        image: "",
        blurbs: "",
    });
    const submitParties = async () => {
        setCurrentImage(newEvent.image);
        await addDoc(collection(firestore, "parties"), {
            name: newEvent.name,
            image: newEvent.image,
            blurbs: newEvent.blurbs,
        });
    };
    const handleInputChange = (event) => {
        event.preventDefault();
        let value = event.target.value;
        setNewEvent({
            ...newEvent,
            [event.target.name]: value,
        });
    };

    return (
        <div className="bg-gray-200 rounded-md flex justify-between">
            <div className="pt-2 pb-4 px-4">
                <span className="font-bold">Name: </span>
                <input
                    name="name"
                    type="text"
                    defaultValue={""}
                    className="font-bold text-2xl mb-1 p-1"
                    onChange={handleInputChange}
                />
                <br />
                <span className="font-bold">Description: </span>
                <textarea
                    name="blurbs"
                    rows="6"
                    cols="40"
                    defaultValue={""}
                    className="mb-1 p-1"
                    onChange={handleInputChange}
                />
                <p className="my-2">
                    <span className="font-bold">Image: </span>
                    <input
                        className="w-100"
                        name="image"
                        onChange={handleInputChange}
                        type="text"
                        defaultValue={""}
                    />
                </p>
                <button
                    className="font-bold border-2 p-1 mt-5 rounded-md border-slate-400 bg-green-600 text-white hover:bg-green-800"
                    onClick={submitParties}
                >
                    Submit
                </button>
            </div>
            <img className="rounded-t-md w-1/2" src={currentImage} alt={"None"}/>
        </div>
    );
};

export default ModifiableAddPartiesCard;