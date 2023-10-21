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
        when={event.when.toDate().toDateString()}
      />
    )
  )
  return (
    <>
      <Hero />
      <div className="mt-32 pb-16 mx-auto max-w-screen-md px-8">
        <EventHeader text="Upcoming Events" />
        {filteredEvents((event) => event.when.toDate() >= currentDate)}
        <EventHeader text="Past Events" />
        {filteredEvents((event) => event.when.toDate() < currentDate)}
      </div>
    </>
  );
};

export default Home;
