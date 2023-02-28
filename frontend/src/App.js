import EventHeader from "./components/EventHeader";
import Event from "./components/Event";
import Hero from "./components/Hero";
import events from "./data/events";

function App() {
  return (
    <>
      <Hero />
      <div class="mt-32 pb-16 mx-auto max-w-screen-md px-8">
        <EventHeader text="Upcoming Events" />
        {events
          .filter((event) => event.category === "upcoming")
          .map((event, i) => {
            return (
              <Event
                key={i}
                image={event.image}
                virtual={event.virtual}
                title={event.title}
                description={event.description}
                where={event.where}
                when={event.when}
              />
            );
          })}
        <EventHeader text="Past Events" />
        {events
          .filter((event) => event.category === "past")
          .map((event, i) => {
            return (
              <Event
                key={i}
                image={event.image}
                virtual={event.virtual}
                title={event.title}
                description={event.description}
                where={event.where}
                when={event.when}
              />
            );
          })}
      </div>
    </>
  );
}

export default App;
