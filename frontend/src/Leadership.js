import Navbar from "./components/Navbar";
import Footnote from "./components/Footnote";
import './App.css';
import Bio from "./components/Bio";
import leadership from "./data/leadership.json";

function Leadership() {
    return (
        <div>
            <Navbar></Navbar>
            <div className="h-32 mt-24 justify-center">
                <div className="text-center text-3xl text-black font-bold">
                    Executive Board
                </div>
            </div>
            <div className="h-screen grid grid-cols-3 gap-x-8 gap-y-24 ml-28">
                {leadership
                    .map((leader, i) => {
                        return (
                            <Bio
                                key={i}
                                name={leader.name}
                                position={leader.position}
                                blurbs={leader.blurbs}
                                image={leader.image}
                            />
                        );
                    })}
            </div>
            <div className="h-32"> </div>
            <Footnote></Footnote>
        </div>
    );
}

export default Leadership;
