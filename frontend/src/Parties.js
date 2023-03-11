import './App.css';
import Parties from "./components/Parties";
import parties from "./data/parties.json";

function Parties_page() {
    return (
        <div>
            <Navbar></Navbar>
            <div className="h-32 mt-24 justify-center">
                <div className="text-center text-3xl text-black font-bold">
                    Parties
                </div>
            </div>
            <div className="h-screen grid grid-cols-3 gap-x-8 gap-y-16 ml-28">
                {parties
                    .map((party, i) => {
                        return (
                            <Parties
                                key={i}
                                name={party.name}
                                blurbs={party.blurbs}
                                image={party.image}
                            />
                        );
                    })}
            </div>
            <div className="h-32"> </div>
            <Footnote></Footnote>
        </div>
    );
}

export default Parties_page;
