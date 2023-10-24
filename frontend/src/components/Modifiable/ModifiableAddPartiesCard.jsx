import { addDoc, collection, getFirestore } from "firebase/firestore";
import React, { useState } from "react";

const baseParties = {
    image: "",
    name: "",
    blurbs: "",
};

const ModifiableAddPartiesCard = () => {
    const [currentImage, setCurrentImage] = useState();
    const [newParty, setNewParty] = useState(baseParties);
    const submitParties = async () => {
        const firestore = getFirestore();
        setCurrentImage(newParty.image);
        await addDoc(collection(firestore, "parties"), newParty);
        setNewParty(baseParties)
    };
    const handleInputChange = (e) => {
        e.prPartyDefault();
        let value = e.target.value;
        setNewParty({
            ...newParty,
            [e.target.name]: value,
        });
    };

    const { name, image, blurbs } = newParty

    return (
        <div className="bg-gray-200 rounded-md flex justify-between">
            <div className="pt-2 pb-4 px-4">
                <span className="font-bold">Name: </span>
                <input
                    name="name"
                    type="text"
                    value={name}
                    className="font-bold text-2xl mb-1 p-1"
                    onChange={handleInputChange}
                />
                <br />
                <span className="font-bold">Description: </span>
                <textarea
                    name="blurbs"
                    rows="6"
                    cols="40"
                    value={blurbs}
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
                        value={image}
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