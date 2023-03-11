const Section = ({ section, data }) => {
    return (
        <div className="text-xl text-black">
            <h5 className="font-bold">
                {section}
            </h5>
            <p>
                {data}
            </p>
        </div>
    );
};

export default Section;