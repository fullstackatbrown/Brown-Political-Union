import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Footnote from "./components/Footnote";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Events from "./components/Events";
import Admin from "./components/Admin";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  { path: "/about", element: <AboutUs /> },
  { path: "/events", element: <Events /> },
  { path: "/admin", element: <Admin /> },
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
