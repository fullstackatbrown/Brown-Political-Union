import Navbar from "./components/Navbar";
import EventHeader from "./components/EventHeader";
import Event from "./components/Event";
import Hero from "./components/Hero";
import Footnote from "./components/Footnote";
import "./App.css";

function App() {
  return (
    <main class="h-screen">
      <Navbar />
      <Hero />
      <div class="mt-32 pb-16 mx-auto max-w-screen-md px-8">
        <EventHeader text="Upcoming Events" />
        <Event
          image="https://source.unsplash.com/yUHAbzjJhR0"
          virtual={true}
          title="A Virtual Event"
          description="This is a virtual event. It will be held on Zoom. This is a space to describe the virtual event. A lot of information can be put here. This is placeholder text."
          where="https://www.brown.edu/"
          when="Feb 25th @9AM"
        />
        <EventHeader text="Past Events" />
        <Event
          image="https://source.unsplash.com/xMygEKgsnes"
          virtual={false}
          title="Event Title"
          description='The DPU welcomes Bobby Seale, one of the original "Chicago Eight" which turned into the trial of the "Chicago Seven" once his case was severed from the others. He Co-Founded the Black Panther Party with Huey Newton to monitor police activity and challenge police brutality in Black communities.'
          where="Blue Room, Campus Center"
          when="Feb 1st @6PM"
        />
        <Event
          image="https://source.unsplash.com/9AusKAGgagg"
          virtual={false}
          title="Another Event"
          description="This is the description of another event. You can put a lot of text here to describe an event."
          where="Sayles Hall 205"
          when="Jan 22nd @2PM"
        />
      </div>
      <Footnote />
    </main>
  );
}

export default App;
