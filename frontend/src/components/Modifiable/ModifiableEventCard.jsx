import { Timestamp } from "firebase/firestore";
import DatePicker from "react-datepicker";
import { useModifiableCard } from "../../firebase/hooks/useModifiableCard";


const ModifiableEventCard = (props) => {
    const { id, ...baseEvent } = props
    const {
        currentImage,
        currentData,
        setCurrentData,
        modifyCard,
        deleteCard,
    } = useModifiableCard("events", id, baseEvent);
    const handleInputChange = (event) => {
        event.preventDefault();
        let value = event.target.value;
        setCurrentData({
            ...currentData,
            [event.target.name]: value,
        });
    };
    const { title, image, description, virtual, when, where } = currentData;
    return (
        <div className="bg-gray-200 rounded-md flex justify-between">
            <div className="pt-2 pb-4 px-4">
                <span className="font-bold">Title: </span>
                <input
                    name="title"
                    type="text"
                    defaultValue={title}
                    placeholder={title}
                    className="font-bold text-2xl mb-1 p-1"
                    onChange={handleInputChange}
                />
                <div className="my-2">``
                    <span className="font-bold">Mode: </span>
                    <select
                        name="virtual"
                        className="bg-white p-1"
                        defaultValue={virtual ? "virtual" : "in-person"}
                        onChange={(v) => setCurrentData({
                            ...currentData,
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
                    defaultValue={description}
                    className="mb-1 p-1"
                    onChange={handleInputChange}
                />
                <p className="my-2">
                    <span className="font-bold">Where: </span>
                    <input
                        name="where"
                        onChange={handleInputChange}
                        type="text"
                        defaultValue={where}
                        className="p-1"
                    />
                </p>
                <p className="my-2">
                    <span className="font-bold">When: </span>
                    <DatePicker
                        showIcon
                        selected={when.toDate()}
                        onChange={(date) => setCurrentData({
                            ...currentData,
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
                        defaultValue={image}
                    />
                </p>
                <button
                    className="font-bold border-2 p-1 mt-5 rounded-md border-slate-400 bg-green-600 text-white hover:bg-green-800"
                    onClick={modifyCard}
                >
                    Modify
                </button>
                <button
                    className="font-bold border-2 p-1 mt-5 ml-4 rounded-md border-slate-400 bg-red-600 text-white hover:bg-red-800"
                    onClick={deleteCard}
                >
                    Delete
                </button>
            </div>
            <img className="rounded-t-md w-1/2" src={currentImage} alt={"Not found"} />
        </div>
    );
};

export default ModifiableEventCard;