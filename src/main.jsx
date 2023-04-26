import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./assets/components/Home/Home.jsx";
import Header from "./assets/components/Header/Header.jsx";
import About from "./assets/components/About/About.jsx";
import Statistics from "./assets/components/Statistics/Statistics.jsx";
import Blog from "./assets/components/Blog/Blog.jsx";
import AppliedJobs from "./assets/components/AppliedJobs/AppliedJobs.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/header",
        element: <Header />,
      },
      {
        path: "/about",
        element:<About/>,
      },
      {
        path: "/appliedjobs",
        element:<AppliedJobs/>,
      },
      {
        path: "/statistics",
        element:<Statistics/>,
      },
      {
        path: "/blog",
        element:<Blog/>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
  // <React.StrictMode>
  // </React.StrictMode>
);
