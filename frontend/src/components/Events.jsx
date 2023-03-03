import { useState } from "react";
import events from "../data/events";

const EventCard = ({ image, virtual, title, description, where, when }) => {
  return (
    <div class="bg-gray-200 rounded-md">
      <img class="object-cover rounded-t-md" src={image} />
      <div class="pt-2 pb-4 px-4">
        <h3 class="font-bold text-2xl mb-0">{title}</h3>
        <p class="text-slate-600 mb-2">{virtual ? "Virtual" : "In-Person"}</p>
        <p class="mb-3">{description}</p>
        <p>
          <span class="font-bold">Where: </span>
          {virtual ? (
            <a class="text-cyan-600 hover:text-blue-800" href={where}>
              Link
            </a>
          ) : (
            where
          )}
        </p>
        <p>
          <span class="font-bold">When: </span>
          {when}
        </p>
      </div>
    </div>
  );
};

const UpcomingPastButton = ({ upcoming, setUpcoming }) => {
  return (
    <div class="h-full">
      <button
        class={`h-full p-2 mr-1 text-white font-bold ${
          upcoming ? "bg-[#650202]" : "bg-gray-600"
        }`}
        onClick={() => setUpcoming(true)}
      >
        Upcoming
      </button>
      <button
        class={`h-full p-2 text-white font-bold ${
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
  return (
    <div>
      <div class="mt-40 mx-auto max-w-screen-md px-8">
        <section class="flex text-center align-items-center mb-12">
          <h3 class="font-bold text-3xl">Upcoming Events & Speakers</h3>
          <div class="ml-auto justify-align-items-center">
            <UpcomingPastButton upcoming={upcoming} setUpcoming={setUpcoming} />
          </div>
        </section>
      </div>
      <div class="grid pb-16 mx-auto max-w-screen-lg px-8 grid-cols-3 gap-8">
        {events
          .filter(
            (event) => event.category === (upcoming ? "upcoming" : "past")
          )
          .map((event, i) => {
            return (
              <EventCard
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
    </div>
  );
};

export default Events;
