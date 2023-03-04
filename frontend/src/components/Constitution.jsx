const Constitution = ({head, content}) => {
    return (
        <div>
            <h4 className="text-xl text-black font-bold">
                {head}
            </h4>
            <p className="text-l text-black">
                {content}
            </p>
        </div>
    );
};

export default Constitution;