import { useCollection } from "../firebase/hooks/useCollection";
import Event from "./Event";
import EventHeader from "./EventHeader";
import Hero from "./Hero";

const Home = () => {
  const currentDate = new Date();
  const events = useCollection("events");
  const filteredEvents = (filterFunc) => events
  .filter(filterFunc)
  .map((event, i) => (
      <Event
        key={i}
        {...event}
      />
    )
  )
  return (
    <>
      <Hero />
      <div className="flex flex-col justify-center items-center w-100">
        <div className="text-center mt-24 text-2xl uppercase">Our Vision</div>
        <div className="text-center mt-10 mb-10">
          <div className="text-5xl mb-6">
            We aim to promote facts.
          </div>
          <div className="text-2xl px-5 lg:px-80">
            We believe in advancing student understanding of foreign and
            domestic policy by promoting facts, seeking nuance, and challenging
            preconceptions. Above all, the BPU works to bridge partisan divides
            and foster respect for the freedom of speech among the Brown student
            community.
          </div>
        </div>
        <a href="/about">
          <button class="px-3.5 py-3 text-white text-2xl bg-[#9D0600] uppercase">
            About Us
          </button>
        </a>
      </div>
      <div className="mt-24 pb-16 mx-auto max-w-screen-md px-8">
        <EventHeader text="Upcoming Events" />
        {filteredEvents((event) => event.when.toDate() >= currentDate)}
        <EventHeader text="Past Events" />
        {filteredEvents((event) => event.when.toDate() < currentDate)}
      </div>
    </>
  );
};

export default Home;
