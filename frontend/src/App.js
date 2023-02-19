import Navbar from "./components/Navbar";
import Footnote from "./components/Footnote";
import './App.css';

function App() {
  return (
    <div>
      <Navbar></Navbar>
        <div className="h-52">
            EVENTS
        </div>
        <div className="h-52">
            EVENTS 2
        </div>
      <Footnote></Footnote>
    </div>
  );
}

export default App;
