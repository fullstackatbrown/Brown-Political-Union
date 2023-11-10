import { useModifiableCard } from "../../firebase/hooks/useModifiableCard";

const ModifiablePartiesCard = (props) => {
    const { id, ...baseParty } = props;

    const {
        currentImage,
        currentData,
        setCurrentData,
        modifyCard,
        deleteCard,
    } = useModifiableCard("parties", id, baseParty, "Party");
    const { name, image, blurbs } = currentData;
    const handleInputChange = (event) => {
        event.preventDefault();
        let value = event.target.value;
        setCurrentData({
            ...currentData,
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
                    value={name}
                    placeholder={name}
                    className="font-bold text-2xl mb-1 p-1"
                    onChange={handleInputChange}
                />
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
            <img className="rounded-t-md w-1/2" src={currentImage} alt={"None"}/>
        </div>
    );
};

export default ModifiablePartiesCard