import {useState} from "react";
import {Timestamp} from "firebase/firestore";

const ModifiableEventCard = ({
                                 firebase,
                                 id,
                                 image,
                                 virtual,
                                 title,
                                 description,
                                 where,
                                 when,
                             }) => {
    const [currentImage, setCurrentImage] = useState(image);
    const [newEvent, setNewEvent] = useState({
        description: description,
        image: image,
        title: title,
        virtual: virtual,
        when: when,
        where: where,
    });
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

    const modify = async () => {
        setCurrentImage(newEvent.image);
        firebase.modifyEvent(id, newEvent);
    };

    let tempWhen = when;
    tempWhen.setHours(when.getHours() - 5);
    const date = tempWhen.toISOString().split("T")[0];

    return (
        <div class="bg-gray-200 rounded-md flex justify-between">
            <div class="pt-2 pb-4 px-4">
                <span class="font-bold">Title: </span>
                <input
                    name="title"
                    type="text"
                    defaultValue={title}
                    placeholder={title}
                    class="font-bold text-2xl mb-1 p-1"
                    onChange={handleInputChange}
                />
                <div class="my-2">
                    <span class="font-bold">Mode: </span>
                    <select
                        name="virtual"
                        class="bg-white p-1"
                        defaultValue={virtual ? "virtual" : "in-person"}
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
                    defaultValue={description}
                    class="mb-1 p-1"
                    onChange={handleInputChange}
                />
                <p class="my-2">
                    <span class="font-bold">Where: </span>
                    <input
                        name="where"
                        onChange={handleInputChange}
                        type="text"
                        defaultValue={where}
                        class="p-1"
                    />
                </p>
                <p class="my-2">
                    <span class="font-bold">When: </span>
                    <input
                        name="when"
                        onChange={handleInputChange}
                        type="date"
                        defaultValue={date}
                    />
                </p>
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
            <img class="rounded-t-md w-1/2" src={currentImage} alt={"Not found"} />
        </div>
    );
};

export default ModifiableEventCard;