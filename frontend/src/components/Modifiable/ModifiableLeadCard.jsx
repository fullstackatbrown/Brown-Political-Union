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

    const deleteEvent = async () => {
        setCurrentImage(newEvent.image);
        await firebase.deleteGeneral(id, "leadership")
    };

    return (
        <div className="bg-gray-200 rounded-md flex justify-between">
            <div className="pt-2 pb-4 px-4">
                <span className="font-bold">Name: </span>
                <input
                    name="name"
                    type="text"
                    defaultValue={name}
                    placeholder={name}
                    className="font-bold text-2xl mb-1 p-1"
                    onChange={handleInputChange}
                />
                <div className="my-2">
                    <span className="font-bold">Position: </span>
                    <input
                        name="position"
                        type="text"
                        className="bg-white p-1"
                        defaultValue={position}
                        onChange={handleInputChange}
                    />
                </div>
                <span className="font-bold">Description: </span>
                <textarea
                    name="blurbs"
                    rows="6"
                    cols="40"
                    defaultValue={blurbs}
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
                        defaultValue={image}
                    />
                </p>
                <button
                    className="font-bold border-2 p-1 mt-5 rounded-md border-slate-400 bg-green-600 text-white hover:bg-green-800"
                    onClick={modify}
                >
                    Modify
                </button>
                <button
                    className="font-bold border-2 p-1 mt-5 ml-4 rounded-md border-slate-400 bg-red-600 text-white hover:bg-red-800"
                    onClick={deleteEvent}
                >
                    Delete
                </button>
            </div>
            <img className="rounded-t-md w-1/2" src={currentImage} alt="None"/>
        </div>
    );
};

export default ModifiableLeadCard;