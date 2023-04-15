import {useState} from "react";

const ModifiableLeadCard = ({firebase,id,image,name,position,blurbs}) => {
    const [currentImage, setCurrentImage] = useState(image);
    const [newEvent, setNewEvent] = useState({
        image: image,
        name: name,
        position: position,
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
        firebase.modifyGeneral("leadership", id, newEvent);
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
                <div class="my-2">
                    <span class="font-bold">Position: </span>
                    <input
                        name="position"
                        type="text"
                        class="bg-white p-1"
                        defaultValue={position}
                        onChange={handleInputChange}
                    />
                </div>
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
            <img class="rounded-t-md w-1/2" src={currentImage} alt="None"/>
        </div>
    );
};

export default ModifiableLeadCard;