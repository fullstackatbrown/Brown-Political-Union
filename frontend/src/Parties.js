import Navbar from "./components/Navbar";
import './App.css';
import Parties from "./components/Parties";
import {useEffect, useState} from "react";
import { useFirebase } from "./firebase";

function Parties_page() {
    const [party_firebase, setParty] = useState([]);
    const firebase = useFirebase();
    useEffect(() => {
        async function fetch() {
            setParty(await firebase.getAllGen("parties"));
        }
        fetch();
    }, [firebase]);
    return (
        <div>
            <div className="h-32 mt-24 justify-center">
                <div className="text-center text-3xl text-black font-bold">
                    Parties
                </div>
            </div>
            <div className="h-screen grid grid-cols-3 gap-x-8 gap-y-16 ml-28">
                {party_firebase
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
        </div>
    );
}

export default Parties_page;
