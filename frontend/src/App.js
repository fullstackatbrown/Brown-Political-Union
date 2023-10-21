import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import Admin from "./components/Admin";
import { default as Event, default as Events } from "./components/Events";
import Footnote from "./components/Footnote";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Leadership from "./Leadership";
import Parties from "./Parties";
// import Contact from "./contact"
import ConstitutionReact from "./ConstitutionReact";

// Router : A constant determining the total connection between the home page and
// the other pages
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
  { path: "/constitution", element: <ConstitutionReact /> },
  // { path: "/contact", element: <Contact /> },
  { path: "/parties", element: <Parties /> },
]);

// App : The function that creates the
function App() {
  return (
    <main className="h-screen">
      <Navbar />
      <RouterProvider router={router} />
      <Footnote />
    </main>
  );
}

export default App;
