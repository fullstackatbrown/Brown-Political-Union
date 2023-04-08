import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Footnote from "./components/Footnote";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Events from "./components/Events";
import Admin from "./components/Admin";
import Parties from "./Parties";
import Leadership from "./Leadership";
import Event from "./components/Events";
import Contact from "./contact"
import Constitution_react from "./Constitution_react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  { path: "/about", element: <AboutUs /> },
  { path: "/events", element: <Events /> },
  { path: "/admin", element: <Admin /> },
  { path: "/events", element: <Event /> },
  { path: "/leadership", element: <Leadership /> },
  { path: "/constitution", element: <Constitution_react /> },
  { path: "/contact", element: <Contact /> },
  { path: "/parties", element: <Parties /> },
]);

function App() {
  return (
    <main class="h-screen">
      <Navbar />
      <RouterProvider router={router} />
      <Footnote />
    </main>
  );
}

export default App;
