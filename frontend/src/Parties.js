import Navbar from "./components/Navbar";
import Footnote from "./components/Footnote";
import './App.css';
import Parties from "./components/Parties";

function Parties_page() {
    return (
        <div>
            <Navbar></Navbar>
            <div className="h-48 mt-14 justify-center">
                <div className="text-center text-3xl text-black font-bold">
                    Parties
                </div>
            </div>
            <div className="h-32 grid grid-rows-1 grid-flow-col gap-4 ml-20">
                <Parties name="Logan Tullai" position="President" blurbs="Brown‘25, Political Science and Economics"> </Parties>
                <Parties name="William Deckelbaum" position="Vice President" blurbs="Brown‘24, Mathematical Physics"> </Parties>
                <Parties name="Michael Kuharski" position="Speaker" blurbs="Brown ‘24, Partieschemistry"> </Parties>
            </div>
            <div className="h-32"> </div>
            <div className="h-32 grid grid-rows-1 grid-flow-col gap-4 ml-20">
                <Parties name="Vacant" position="Secretary" blurbs="Hello World"> </Parties>
                <Parties name="Vacant" position="Treasurer" blurbs="Hello World"> </Parties>
                <Parties name="Vacant" position="Director of Membership and Public Relations" blurbs="Hello World"> </Parties>
            </div>
            <div className="h-32"> </div>
            <Footnote></Footnote>
        </div>
    );
}

export default Parties_page;