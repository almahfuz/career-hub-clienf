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
import ApplyHere from "./assets/components/ApplyHere/ApplyHere.jsx";
import JobCategoryList from "./assets/components/JobCategoryList/JobCategoryList.jsx";
import { productsAndCartData } from "./assets/components/loaders/loader.js";
import MainHome from "./assets/components/MainHome/MainHome.jsx";
import JobDetails from "./assets/components/JobDetails/JobDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // loader: productsAndCartData,
    children: [
      {
        path: "/",
        element:<MainHome/>,
        loader: productsAndCartData,
      },
      {
        path: "jobDetails",
        element: <JobDetails />,
      },
      {
        path: "jobDetails/:id",
        element: <JobDetails />,
        loader: productsAndCartData,
      },
      {
        path: "appliedJobs",
        element:<AppliedJobs/>,
      },
      {
        path: "header",
        element: <Header />,
      },
      {
        path: "statistics",
        element:<Statistics/>,
      },
      {
        path: "blog",
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
