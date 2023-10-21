import { useEffect, useState } from "react";
import Hero from "./Hero";
import EventHeader from "./EventHeader";
import Event from "./Event";
import { useFirebase } from "../firebase";

const Home = () => {
  const firebase = useFirebase();
  const [events, setEvents] = useState([]);
  const currentDate = new Date();

  useEffect(() => {
    async function fetch() {
      setEvents(await firebase.getAllEvents());
    }
    fetch();
  }, [firebase]);

  return (
    <>
      <Hero />
      <div className="mt-32 pb-16 mx-auto max-w-screen-md px-8">
        <EventHeader text="Upcoming Events" />
        {events
          .filter((event) => event.when.toDate() >= currentDate)
          .map((event, i) => {
            console.log(event.when.toDate());
            return (
              <Event
                key={i}
                image={event.image}
                virtual={event.virtual}
                title={event.title}
                description={event.description}
                where={event.where}
                when={event.when.toDate().toDateString()}
              />
            );
          })}
        <EventHeader text="Past Events" />
        {events
          .filter((event) => event.when.toDate() < currentDate)
          .map((event, i) => {
            return (
              <Event
                key={i}
                image={event.image}
                virtual={event.virtual}
                title={event.title}
                description={event.description}
                where={event.where}
                when={event.when.toDate().toDateString()}
              />
            );
          })}
      </div>
    </>
  );
};

export default Home;
