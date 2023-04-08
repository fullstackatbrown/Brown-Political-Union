import { useState, useEffect } from "react";
import { useFirebase } from "../firebase";
import { Timestamp } from "firebase/firestore";

const ModifiableEventCard = ({
  firebase,
  id,
  image,
  virtual,
  title,
  description,
  where,
  when,
}) => {
  const [currentImage, setCurrentImage] = useState(image);
  const [newEvent, setNewEvent] = useState({
    description: description,
    image: image,
    title: title,
    virtual: virtual,
    when: when,
    where: where,
  });
  const handleInputChange = (event) => {
    event.preventDefault();
    let value = event.target.value;
    if (event.target.name === "virtual") {
      value = value === "virtual";
    } else if (event.target.name === "when") {
      let tempWhen = new Date(value);
      tempWhen.setHours(tempWhen.getHours() + 5);
      value = Timestamp.fromDate(new Date(tempWhen));
    }
    setNewEvent({
      ...newEvent,
      [event.target.name]: value,
    });
  };

  const modify = async () => {
    setCurrentImage(newEvent.image);
    firebase.modifyEvent(id, newEvent);
  };

  let tempWhen = when;
  tempWhen.setHours(when.getHours() - 5);
  const date = tempWhen.toISOString().split("T")[0];

  return (
    <div class="bg-gray-200 rounded-md flex justify-between">
      <div class="pt-2 pb-4 px-4">
        <span class="font-bold">Title: </span>
        <input
          name="title"
          type="text"
          defaultValue={title}
          placeholder={title}
          class="font-bold text-2xl mb-1 p-1"
          onChange={handleInputChange}
        ></input>
        <div class="my-2">
          <span class="font-bold">Mode: </span>
          <select
            name="virtual"
            class="bg-white p-1"
            defaultValue={virtual ? "virtual" : "in-person"}
            onChange={handleInputChange}
          >
            <option value="virtual">Virtual</option>
            <option value="in-person">In-Person</option>
          </select>
        </div>
        <span class="font-bold">Description: </span>
        <textarea
          name="description"
          rows="6"
          cols="40"
          defaultValue={description}
          class="mb-1 p-1"
          onChange={handleInputChange}
        ></textarea>
        <p class="my-2">
          <span class="font-bold">Where: </span>
          <input
            name="where"
            onChange={handleInputChange}
            type="text"
            defaultValue={where}
            class="p-1"
          ></input>
        </p>
        <p class="my-2">
          <span class="font-bold">When: </span>
          <input
            name="when"
            onChange={handleInputChange}
            type="date"
            defaultValue={date}
          ></input>
        </p>
        <p class="my-2">
          <span class="font-bold">Image: </span>
          <input
            class="w-100"
            name="image"
            onChange={handleInputChange}
            type="text"
            defaultValue={image}
          ></input>
        </p>
        <button
          class="font-bold border-2 p-1 mt-5 rounded-md border-slate-400 bg-green-600 text-white hover:bg-green-800"
          onClick={modify}
        >
          Modify
        </button>
      </div>
      <img class="rounded-t-md w-1/2" src={currentImage} />
    </div>
  );
};

const Dashboard = ({ firebase, signOut }) => {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    async function fetch() {
      setEvents((await firebase.getAllEventDocs()).sort());
    }
    fetch();
  }, [firebase]);

  return (
    <section>
      <h3 class="font-bold text-3xl">Admin Dashboard</h3>
      <div class="grid pb-16 mx-auto px-8 grid-cols-1 gap-8">
        {events.map((event, i) => {
          const data = event.data();
          return (
            <div class="my-2" key={i}>
              <ModifiableEventCard
                firebase={firebase}
                id={event.id}
                image={data.image}
                virtual={data.virtual}
                title={data.title}
                description={data.description}
                where={data.where}
                when={data.when.toDate()}
              />
            </div>
          );
        })}
      </div>
      <button
        class="font-bold border-2 p-2 rounded-md border-slate-400 bg-gray-600 text-white hover:bg-[#650202]"
        onClick={signOut}
      >
        Sign out
      </button>
    </section>
  );
};

const LogInSection = ({ signIn, setEmail, setPassword }) => {
  const handleInputChange = (event) => {
    event.preventDefault();
    const name = event.target.name;
    if (name === "email") {
      setEmail(event.target.value);
    } else if (name == "password") {
      setPassword(event.target.value);
    }
  };

  return (
    <section>
      <h3 class="font-bold text-3xl">Admin Login</h3>
      <div class="flex flex-col mb-4">
        <input
          type="text"
          name="email"
          class="border-2 my-4 p-2 border-slate-400"
          placeholder="Email address"
          onChange={handleInputChange}
        ></input>
        <input
          type="password"
          name="password"
          class="border-2 p-2 border-slate-400"
          placeholder="Password"
          onChange={handleInputChange}
        ></input>
      </div>
      <button
        class="font-bold border-2 p-2 rounded-md border-slate-400 bg-gray-600 text-white hover:bg-[#650202]"
        onClick={signIn}
      >
        Sign in
      </button>
    </section>
  );
};

const Admin = () => {
  const firebase = useFirebase();

  const [loggedIn, setLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = async () => {
    await firebase.signIn(email, password);
  };

  const signOut = async () => {
    await firebase.auth.signOut();
    setLoggedIn(false);
  };

  useEffect(() => {
    firebase.auth.onAuthStateChanged(async (user) => {
      if (!user) return;
      setLoggedIn(true);
    });
  }, [firebase]);

  return (
    <div>
      <div class="mt-40 mx-auto max-w-screen-lg px-8">
        {loggedIn ? (
          <Dashboard firebase={firebase} signOut={signOut} />
        ) : (
          <LogInSection
            signIn={signIn}
            setEmail={setEmail}
            setPassword={setPassword}
          />
        )}
      </div>
    </div>
  );
};

export default Admin;
