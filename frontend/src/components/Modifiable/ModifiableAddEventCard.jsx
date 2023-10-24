import { Timestamp, addDoc, collection, getFirestore } from "firebase/firestore";
import React, { useState } from "react";
import DatePicker from "react-datepicker";


const ModifiableAddEventCard = () => {
    const [currentImage, setCurrentImage] = useState();
    const [newEvent, setNewEvent] = useState({
        description: "",
        image: "",
        title: "",
        virtual: true,
        when: Timestamp.now(),
        where: "",
    });
    const { title, image, description, virtual, when, where } = newEvent;
    const submitEvent = async () => {
        setCurrentImage(newEvent.image);
        const firestore = getFirestore();
        await addDoc(collection(firestore, "events"), newEvent);
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
                <span className="font-bold">Title: </span>
                <input
                    name="title"
                    type="text"
                    className="font-bold text-2xl mb-1 p-1"
                    value={title}
                    onChange={handleInputChange}
                />
                <div className="my-2">
                    <span className="font-bold">Mode: </span>
                    <select
                        name="virtual"
                        className="bg-white p-1"
                        value={virtual ? "virtual" : "in-person"}
                        onChange={(v) => setNewEvent({
                            ...newEvent,
                            virtual: v === "virtual",
                        })}
                    >
                        <option value="virtual">Virtual</option>
                        <option value="in-person">In-Person</option>
                    </select>
                </div>
                <span className="font-bold">Description: </span>
                <textarea
                    name="description"
                    rows="6"
                    cols="40"
                    value={description}
                    className="mb-1 p-1"
                    onChange={handleInputChange}
                />
                <p className="my-2">
                    <span className="font-bold">Where: </span>
                    <input
                        name="where"
                        onChange={handleInputChange}
                        type="text"
                        value={where}
                        className="p-1"
                    />
                </p>
                <p className="my-2">
                    <span className="font-bold">When: </span>
                    <DatePicker
                        showIcon
                        selected={when.toDate()}
                        onChange={(date) => setNewEvent({
                            ...newEvent,
                            when: Timestamp.fromDate(date),
                        })}
                        showTimeInput
                    />
                </p>
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
                    onClick={submitEvent}
                >
                    Submit
                </button>
            </div>
            <img className="rounded-t-md w-1/2" src={currentImage} alt={"Not found"} />
        </div>
    );
};

export default ModifiableAddEventCard;