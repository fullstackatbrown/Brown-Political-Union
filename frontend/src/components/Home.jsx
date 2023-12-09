import { useCollection } from "../firebase/hooks/useCollection";
import Event from "./Event";
import EventHeader from "./EventHeader";
import Hero from "./Hero";

const AboutUsButton = ({ name, link }) => {
  return (
    <div className="flex justify-center items-center mt-6">
    <button className="text-lg text-[#FFFFFF] bg-[#9D0600] px-4 py-2 rounded-md" onClick={() => window.location.href = link}>
      {name}
    </button>
    </div>
  );
};


const Home = () => {
  const currentDate = new Date();
  const events = useCollection("events");
  const filteredEvents = (filterFunc) =>
    events.filter(filterFunc).map((event, i) => (
      <Event key={i} {...event} />
    ));

  return (
    <>
      <Hero />
      <div className="bg-[#FFFFFF] mt-32 pb-6 mx-auto max px-10 width: 1512px height: 481px">
        <h1 className="text-center mt-32 pb-6 mx-auto text-xl">OUR VISION</h1>
        <h3 className="text-3xl mb-4 text-center">We aim to promote facts. </h3>
        <p className="text-center mb-4 align-middle mt-10 mx-auto max-w-screen-md">
          We believe in advancing student understanding of foreign and domestic policy by promoting facts, seeking nuance, and challenging preconceptions. Above all, the BPU works to bridge partisan divides and foster respect for the freedom of speech among the Brown student community.
        </p>
        <AboutUsButton name="About Us" link="/about"/>

      </div>
      <div className="mt-32 pb-16 mx-width-full width:1512px height:973px px-8 bg-[#F0E0A0]">
        <EventHeader text="Upcoming Events"/>
        {filteredEvents((event) => event.when.toDate() >= currentDate)}
        <EventHeader text="Past Events" />
        {filteredEvents((event) => event.when.toDate() < currentDate)}
      </div>
    </>
  );
};

export default Home;
