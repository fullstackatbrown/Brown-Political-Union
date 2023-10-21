import React, { useEffect, useState } from 'react';
import "../App.css";
import { useFirebase } from "../firebase";
import { useCollection } from '../firebase/hooks/useCollection';
import ModifiableAddEventCard from "./Modifiable/ModifiableAddEventCard";
import ModifiableAddLeadCard from "./Modifiable/ModifiableAddLeadCard";
import ModifiableAddPartiesCard from "./Modifiable/ModifiableAddPartiesCard";
import ModifiableEventCard from "./Modifiable/ModifiableEventCard";
import ModifiableLeadCard from "./Modifiable/ModifiableLeadCard";
import ModifiablePartiesCard from "./Modifiable/ModifiablePartiesCard";

const Dashboard = ({ signOut }) => {
  const events = useCollection("events");
  const parties = useCollection("parties");
  const leaders = useCollection("leadership");

  return (
      <div>
          <section>
              <h3 className="font-bold text-3xl text-center">Admin Dashboard</h3>
              <h3 className="font-bold text-3xl">Events : </h3>
              <div className="grid pb-16 mx-auto px-8 grid-cols-1 gap-8">
                  {events.map((data) => {
                      return (
                        <div className="my-2" key={data.id}>
                              <ModifiableEventCard {...data} when={data.when.toDate()} />
                          </div>
                      );
                  })}
              </div>
              <div className="grid pb-16 mx-auto px-8 grid-cols-1 gap-8">
                  <ModifiableAddEventCard/>
              </div>
              <h3 className="font-bold text-3xl">Parties : </h3>
              <div className="grid pb-16 mx-auto px-8 grid-cols-1 gap-8">
                  {parties.map((data) => {
                      return (
                          <div className="my-2" key={data.id}>
                              <ModifiablePartiesCard {...data} />
                          </div>
                      );
                  })}
              </div>
              <div className="grid pb-16 mx-auto px-8 grid-cols-1 gap-8">
                  <ModifiableAddPartiesCard/>
              </div>
              <h3 className="font-bold text-3xl my-5">Leadership : </h3>
              <div className="grid pb-16 mx-auto px-8 grid-cols-1 gap-8">
                  {leaders.map((data) => {
                      return (
                          <div className="my-2" key={data.id}>
                              <ModifiableLeadCard {...data} />
                          </div>
                      );
                  })}
              </div>
              <div className="grid pb-16 mx-auto px-8 grid-cols-1 gap-8">
                  <ModifiableAddLeadCard/>
              </div>
              <button
                  className="font-bold border-2 p-2 rounded-md border-slate-400 bg-gray-600 text-white hover:bg-[#650202] mb-5"
                  onClick={signOut}
              >
                  Sign out
              </button>
          </section>
      </div>
  );
};

const LogInSection = ({ signIn, setEmail, setPassword }) => {
  const handleInputChange = (event) => {
    event.preventDefault();
    const name = event.target.name;
    if (name === "email") {
      setEmail(event.target.value);
    } else if (name === "password") {
      setPassword(event.target.value);
    }
  };

  return (
    <section>
      <h3 className="font-bold text-3xl">Admin Login</h3>
      <div className="flex flex-col mb-4">
        <input
        type="text"
        name="email"
        className="border-2 my-4 p-2 border-slate-400"
        placeholder="Email address"
        onChange={handleInputChange}
        />
        <input
        type="password"
        name="password"
        className="border-2 p-2 border-slate-400"
        placeholder="Password"
        onChange={handleInputChange}
        />
      </div>
      <button
        className="font-bold border-2 p-2 rounded-md border-slate-400 bg-gray-600 text-white hover:bg-[#650202]"
        onClick={signIn}
      >
        Sign in
      </button>
      <div className="h-32">

      </div>
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
      <div className="mt-40 mx-auto max-w-screen-lg px-8">
        {loggedIn ? (
          <Dashboard
              signOut={signOut}
          />
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
