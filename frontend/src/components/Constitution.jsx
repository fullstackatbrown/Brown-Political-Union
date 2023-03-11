import Section from "./Section";
const Constitution = ({head, content}) => {
    return (
        <div className="mb-4">
            <h4 className="text-2xl text-black font-bold">
                {head}
            </h4>
            {content
                .map((sub_content, i) => {
                    return (
                        <Section
                            key = {i}
                            section={sub_content.section}
                            data={sub_content.data}
                        />
                    );
                })}
        </div>
    );
};

export default Constitution;