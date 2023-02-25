const Bio = ({ name, position, image, blurbs }) => {
    return (
        <div className="h-32 w-1/3 mx-6">
            <div className="text-xl text-black font-bold">
                <img className="object-cover" src={image} alt={"Pic for Events"}/>
            </div>
            <div className="text-xl text-black font-bold text-center">
                {position}
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

export default Bio;