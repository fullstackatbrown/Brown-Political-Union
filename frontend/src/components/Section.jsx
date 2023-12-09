const Section = ({ section, data }) => {
    return (
        <div className="text-l text-white">
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