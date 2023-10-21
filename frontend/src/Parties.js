import './App.css';
import Parties from "./components/Parties";
import { useCollection } from './firebase/hooks/useCollection';

function Parties_page() {
    const parties = useCollection("parties");
    
    return (
        <div>
            <div className="h-32 mt-24 justify-center">
                <div className="text-center text-3xl text-black font-bold">
                    Parties
                </div>
            </div>
            <div className="h-screen grid grid-cols-3 gap-x-8 gap-y-16 ml-28">
                {parties.map((party, i) => (<Parties key={i} {...party} />))}
            </div>
            <div className="h-32"> </div>
        </div>
    );
}

export default Parties_page;
