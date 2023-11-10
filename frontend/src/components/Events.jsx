import { useState } from "react";
import { useCollection } from "../firebase/hooks/useCollection";

const EventCard = ({ image, virtual, title, description, where, when }) => {
  return (
    <div className="bg-gray-200 rounded-md">
      <img className="object-cover rounded-t-md" src={image} alt=""/>
      <div className="pt-2 pb-4 px-4">
        <h3 className="font-bold text-2xl mb-0">{title}</h3>
        <p className="text-slate-600 mb-2">{virtual ? "Virtual" : "In-Person"}</p>
        <p className="mb-3">{description}</p>
        <p>
          <span className="font-bold">Where: </span>
          {virtual ? (
            <a className="text-cyan-600 hover:text-blue-800" href={where}>
              Link
            </a>
          ) : (
            where
          )}
        </p>
        <p>
          <span className="font-bold">When: </span>
          {when}
        </p>
      </div>
    </div>
  );
};

const UpcomingPastButton = ({ upcoming, setUpcoming }) => {
  return (
    <div className="h-full">
      <button
        className={`h-full p-2 mr-1 text-white font-bold ${
          upcoming ? "bg-[#650202]" : "bg-gray-600"
        }`}
        onClick={() => setUpcoming(true)}
      >
        Upcoming
      </button>
      <button
        className={`h-full p-2 text-white font-bold ${
          !upcoming ? "bg-[#650202]" : "bg-gray-600"
        }`}
        onClick={() => setUpcoming(false)}
      >
        Past
      </button>
    </div>
  );
};

const Events = () => {
  const [upcoming, setUpcoming] = useState(true);
  const currentDate = new Date();
  const events = useCollection("events");
  const filteredEvents = events.filter((event) => {
    return upcoming
      ? event.when.toDate() > currentDate
      : event.when.toDate() < currentDate;
  });
  return (
    <div>
      <div className="mt-40 mx-auto max-w-screen-md px-8">
        <section className="flex text-center align-items-center mb-12">
          <h3 className="font-bold text-3xl">Upcoming Events & Speakers</h3>
          <div className="ml-auto justify-align-items-center">
            <UpcomingPastButton upcoming={upcoming} setUpcoming={setUpcoming} />
          </div>
        </section>
      </div>
      <div className="grid pb-16 mx-auto max-w-screen-lg px-8 grid-cols-3 gap-8">
        {filteredEvents.length > 0 ? filteredEvents.map((event) => {
            return (
              <EventCard
                key={event.id}
                {...event}
                when={event.when.toDate().toDateString()}
              />
            );
          }) : <p className="text-center">No events to show</p>}
      </div>
    </div>
  );
};

export default Events;
