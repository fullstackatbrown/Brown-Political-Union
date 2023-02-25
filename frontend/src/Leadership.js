import Navbar from "./components/Navbar";
import Footnote from "./components/Footnote";
import './App.css';
import Bio from "./components/Bio";

function Leadership() {
    return (
        <div>
            <Navbar></Navbar>
            <div className="h-48 mt-14 justify-center">
                <div className="text-center text-3xl text-black font-bold">
                    Executive Board
                </div>
            </div>
            <div className="h-32 grid grid-rows-1 grid-flow-col gap-4 ml-20">
                <Bio name="Logan Tullai" position="President" blurbs="Brown‘25, Political Science and Economics"> </Bio>
                <Bio name="William Deckelbaum" position="Vice President" blurbs="Brown‘24, Mathematical Physics"> </Bio>
                <Bio name="Michael Kuharski" position="Speaker" blurbs="Brown ‘24, Biochemistry"> </Bio>
            </div>
            <div className="h-32"> </div>
            <div className="h-32 grid grid-rows-1 grid-flow-col gap-4 ml-20">
                <Bio name="Vacant" position="Secretary" blurbs="Hello World"> </Bio>
                <Bio name="Vacant" position="Treasurer" blurbs="Hello World"> </Bio>
                <Bio name="Vacant" position="Director of Membership and Public Relations" blurbs="Hello World"> </Bio>
            </div>
            <div className="h-32"> </div>
            <Footnote></Footnote>
        </div>
    );
}

export default Leadership;