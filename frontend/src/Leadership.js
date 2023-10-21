import './App.css';
import Bio from "./components/Bio";
import { useCollection } from './firebase/hooks/useCollection';

function Leadership() {
    const leaders = useCollection("leadership");
    return (
        <div>
            <div className="h-32 mt-24 justify-center">
                <div className="text-center text-3xl text-black font-bold">
                    Executive Board
                </div>
            </div>
            <div className="h-screen grid grid-cols-3 gap-x-2 gap-y-24 ml-28">
                {leaders.map((leader, i) => (<Bio key={i} {...leader} />))}
            </div>
            <div className="h-32"> </div>
        </div>
    );
}

export default Leadership;
