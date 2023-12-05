import { useCollection } from "../firebase/hooks/useCollection";
import Event from "./Event";
import ScrollEvent from "./ScrollEvent";
import EventHeader from "./EventHeader";
import Hero from "./Hero";
import { useState } from "react";

const Home = () => {
  const [upcoming, setUpcoming] = useState(true);

  const currentDate = new Date();
  const events = useCollection("events");
  const filteredEvents = (filterFunc) =>
    events
      .filter(filterFunc)
      .map((event, i) => <ScrollEvent key={i} {...event} />);
  return (
    <>
      <Hero />
      <div className="flex flex-col mt-24 pt-16 pl-16 pb-16 gap-10 bg-[#F0E0A0]">
        <h2 className="uppercase"> Events </h2>
        {upcoming ? (
          <div className="pr-16">
            <div className="flex justify-between mb-2">
              <h1 className="text-3xl"> Coming up at the BPU </h1>
              <button
                className="bg-[#9D0600] text-white py-2 px-3 uppercase"
                onClick={() => setUpcoming(false)}
              >
                Past Events
              </button>
            </div>
            Brown Political Union hosts events all year round.
          </div>
        ) : (
          <div className="pr-16">
            <div className="flex justify-between mb-2">
              <h1 className="text-3xl"> Past Events </h1>
              <button
                className="bg-[#9D0600] text-white py-2 px-3 uppercase"
                onClick={() => setUpcoming(true)}
              >
                Upcoming Events
              </button>
            </div>
            <div style={{ maxWidth: '60%'}}>
              Brown Political Union hosts events all year round.
            </div>
          </div>
        )}
        {upcoming ? (
          <div className="flex overflow-x-auto gap-10">
            {filteredEvents((event) => event.when.toDate() >= currentDate)}
          </div>
        ) : (
          <div className="flex overflow-x-auto gap-10 pr-16">
            {filteredEvents((event) => event.when.toDate() < currentDate)}
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
