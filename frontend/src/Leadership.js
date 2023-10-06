import './App.css';
import Bio from "./components/Bio";
import {useEffect, useState} from "react";
import {useFirebase} from "./firebase";

function Leadership() {
    const [leader_firebase, setLeader] = useState([]);
    const firebase = useFirebase();
    useEffect(() => {
        async function fetch() {
            setLeader(await firebase.getAllGen("leadership"));
        }
        fetch();
    }, [firebase]);
    return (
        <div>
            <div className="h-32 mt-24 justify-center">
                <div className="text-center text-3xl text-black font-bold">
                    Executive Board
                </div>
            </div>
            <div className="h-screen grid grid-cols-3 gap-x-2 gap-y-24 ml-28">
                {leader_firebase
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
        </div>
    );
}

export default Leadership;
