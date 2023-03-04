const AboutSection = ({ subtitle, title, description, image, reverse }) => {
    return (
        <section
            className={`flex flex-col-reverse ${
                reverse ? "md:flex-row-reverse" : "md:flex-row"
            } justify-center align-center w-auto gap-20 mb-32`}>
            <div className="flex flex-col justify-center">
                <p className="text-slate-600">{subtitle}</p>
                <h3 className="font-bold text-3xl mb-4">{title}</h3>
                <p>{description}</p>
            </div>
            <img
                className="object-cover rounded-md h-auto w-52 drop-shadow-lg"
                src={image} alt="Pic"
            />
        </section>
    );
};

const AboutValue = ({ title, description }) => {
    return (
        <div display="flex flex-col justify-center align-center">
            <h3 className="text-center text-2xl mb-2">{title}</h3>
            <p className="text-center">{description}</p>
        </div>
    );
};

const AboutUs = () => {
    return (
        <div className="mt-40 pb-16 mx-auto max-w-screen-md px-8">
            <AboutSection
                subtitle={"About BPU"}
                title={"We are a non-partisan student run organization."}
                description={
                    "The Brown Political Union is a nonpartisan student-run organization dedicated to providing a forum for respectful political discourse on campus. From discussions on important policy issues to speaker series to social debate and election watch night events, the BPU is the best place on campus to talk politics in a cordial and low-stress environment."
                }
                image={"https://source.unsplash.com/oN_cUY1v7hs"}
                reverse={false}
            />
            <AboutSection
                subtitle={"Our Vision"}
                title={"We aim to promote facts."}
                description={
                    "We believe in advancing student understanding of foreign and domestic policy by promoting facts, seeking nuance, and challenging preconceptions. Above all, the BPU works to bridge partisan divides and foster respect for the freedom of speech among the Brown student community."
                }
                image={"https://source.unsplash.com/M6JDEotjfAw"}
                reverse={true}
            />
            <div className="text-center">
                <p className="text-slate-600">Our Values</p>
                <p className="text-3xl mb-2">We follow these principles.</p>
                <p className="text-lg">
                    The BPU sticks to its values through ever-changing times.
                </p>
            </div>
            <div className="grid grid-rows-1 grid-flow-col gap-6 pt-16">
                <AboutValue
                    title="Value"
                    description="This is a description of a value. This is a description of a value. This is a description of a value."
                />
                <AboutValue
                    title="Value"
                    description="This is a description of a value. This is a description of a value. This is a description of a value."
                />
                <AboutValue
                    title="Value"
                    description="This is a description of a value. This is a description of a value. This is a description of a value."
                />
            </div>
        </div>
    );
};

export default AboutUs;