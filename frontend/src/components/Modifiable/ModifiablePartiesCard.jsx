import { useState } from "react";

const ModifiablePartiesCard = ({
                                 firebase,
                                 id,
                                 name,
                                 image,
                                 blurbs
                             }) => {
    const [currentImage, setCurrentImage] = useState(image);
    const [newEvent, setNewEvent] = useState({
        name: name,
        image: image,
        blurbs: blurbs,
    });
    const handleInputChange = (event) => {
        event.preventDefault();
        let value = event.target.value;
        setNewEvent({
            ...newEvent,
            [event.target.name]: value,
        });
    };

    const modify = async () => {
        setCurrentImage(newEvent.image);
        firebase.modifyGeneral("parties", id, newEvent);
    };

    return (
        <div class="bg-gray-200 rounded-md flex justify-between">
            <div class="pt-2 pb-4 px-4">
                <span class="font-bold">Name: </span>
                <input
                    name="name"
                    type="text"
                    defaultValue={name}
                    placeholder={name}
                    class="font-bold text-2xl mb-1 p-1"
                    onChange={handleInputChange}
                />
                <span class="font-bold">Description: </span>
                <textarea
                    name="blurbs"
                    rows="6"
                    cols="40"
                    defaultValue={blurbs}
                    class="mb-1 p-1"
                    onChange={handleInputChange}
                />
                <p class="my-2">
                    <span class="font-bold">Image: </span>
                    <input
                        class="w-100"
                        name="image"
                        onChange={handleInputChange}
                        type="text"
                        defaultValue={image}
                    />
                </p>
                <button
                    class="font-bold border-2 p-1 mt-5 rounded-md border-slate-400 bg-green-600 text-white hover:bg-green-800"
                    onClick={modify}
                >
                    Modify
                </button>
            </div>
            <img class="rounded-t-md w-1/2" src={currentImage} alt={"None"}/>
        </div>
    );
};

export default ModifiablePartiesCard