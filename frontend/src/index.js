import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Footnote from "./components/Footnote";
import Navbar from "./components/Navbar";
import AboutUs from "./components/AboutUs";
import Events from "./components/Events";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  { path: "/about", element: <AboutUs /> },
  { path: "/events", element: <Events /> },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <main class="h-screen">
      <Navbar />
      <RouterProvider router={router} />
      <Footnote />
    </main>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
