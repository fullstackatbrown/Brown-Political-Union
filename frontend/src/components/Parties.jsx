const Parties = ({ name, image, blurbs }) => {
    return (
        <div className="h-32 w-3/5">
            <div className="text-xl text-black font-bold">
                <img className="object-cover" src={image} alt={"Pic for Parties"}/>
            </div>
            <div className="text-xl text-black font-bold text-center">
                {name}
            </div>
            <div className="text-l text-black text-center">
                {blurbs}
            </div>
        </div>
    );
}

export default Parties;
