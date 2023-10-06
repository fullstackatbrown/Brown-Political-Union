import {useState} from "react";
import {addDoc, collection, getFirestore, Timestamp} from "firebase/firestore";
import React from "react";
import {initializeApp} from "firebase/app";

const config = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

const ModifiableAddEventCard = () => {
    const app = initializeApp(config);
    const firestore = getFirestore(app);
    const [currentImage, setCurrentImage] = useState();
    const [newEvent, setNewEvent] = useState({
        description: "",
        image: "",
        title: "",
        virtual: true,
        when: "",
        where: "",
    });
    const submitEvent = async () => {
        setCurrentImage(newEvent.image);
        await addDoc(collection(firestore, "events"), {
            description : newEvent.description,
            image: newEvent.image,
            title: newEvent.title,
            virtual: newEvent.virtual,
            when: newEvent.when,
            where: newEvent.where,
        });
    };
    const handleInputChange = (event) => {
        event.preventDefault();
        let value = event.target.value;
        if (event.target.name === "virtual") {
            value = value === "virtual";
        } else if (event.target.name === "when") {
            let tempWhen = new Date(value);
            tempWhen.setHours(tempWhen.getHours() + 5);
            value = Timestamp.fromDate(new Date(tempWhen));
        }
        setNewEvent({
            ...newEvent,
            [event.target.name]: value,
        });
    };

    return (
        <div class="bg-gray-200 rounded-md flex justify-between">
            <div class="pt-2 pb-4 px-4">
                <span class="font-bold">Title: </span>
                <input
                    name="title"
                    type="text"
                    defaultValue={""}
                    class="font-bold text-2xl mb-1 p-1"
                    onChange={handleInputChange}
                />
                <div class="my-2">
                    <span class="font-bold">Mode: </span>
                    <select
                        name="virtual"
                        class="bg-white p-1"
                        defaultValue={"virtual"}
                        onChange={handleInputChange}
                    >
                        <option value="virtual">Virtual</option>
                        <option value="in-person">In-Person</option>
                    </select>
                </div>
                <span class="font-bold">Description: </span>
                <textarea
                    name="description"
                    rows="6"
                    cols="40"
                    defaultValue={""}
                    class="mb-1 p-1"
                    onChange={handleInputChange}
                />
                <p class="my-2">
                    <span class="font-bold">Where: </span>
                    <input
                        name="where"
                        onChange={handleInputChange}
                        type="text"
                        defaultValue={""}
                        class="p-1"
                    />
                </p>
                <p class="my-2">
                    <span class="font-bold">When: </span>
                    <input
                        name="when"
                        onChange={handleInputChange}
                        type="date"
                        defaultValue={""}
                    />
                </p>
                <p class="my-2">
                    <span class="font-bold">Image: </span>
                    <input
                        class="w-100"
                        name="image"
                        onChange={handleInputChange}
                        type="text"
                        defaultValue={""}
                    />
                </p>
                <button
                    class="font-bold border-2 p-1 mt-5 rounded-md border-slate-400 bg-green-600 text-white hover:bg-green-800"
                    onClick={submitEvent}
                >
                    Submit
                </button>
            </div>
            <img class="rounded-t-md w-1/2" src={currentImage} alt={"Not found"} />
        </div>
    );
};

export default ModifiableAddEventCard;