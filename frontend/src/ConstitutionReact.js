import './App.css';
import constitution from "./data/constitution.json";
import Constitution from "./components/Constitution";

function ConstitutionReact() {
    return (
        <div className="px-24">
            <div className="mt-32 justify-center">
                <h2 className="text-center text-4xl text-black font-bold">
                    Constitution
                </h2>
                <h3 className="text-center text-2xl text-black">
                    Brown Political Union
                </h3>
            </div>
            <div className="mt-20">
                {constitution
                    .map((cont, i) => {
                        return (
                            <Constitution
                                key={i}
                                head={cont.header}
                                content={cont.info}
                            />
                        );
                    })}
            </div>
        </div>
    );
}

export default ConstitutionReact;