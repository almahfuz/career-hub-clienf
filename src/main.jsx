import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./assets/components/Header/Header.jsx";
import Statistics from "./assets/components/Statistics/Statistics.jsx";
import Blog from "./assets/components/Blog/Blog.jsx";
import AppliedJobs from "./assets/components/AppliedJobs/AppliedJobs.jsx";
import MainHome from "./assets/components/MainHome/MainHome.jsx";
import JobDetails from "./assets/components/JobDetails/JobDetails.jsx";
import ErrorPage from "./assets/components/ErrorPage/ErrorPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement:<ErrorPage/>,
    children: [
      {
        path: "/",
        element: <MainHome />,
      },
      {
        path: "details/:id",
        element: <JobDetails />,
        loader:() => fetch ('/jobsProfiles.json'),
      },
      {
        path: "appliedJobs",
        element: <AppliedJobs />,
        loader:() => fetch ('/jobsProfiles.json'),
      },
      {
        path: "header",
        element: <Header />,
      },
      {
        path: "statistics",
        element: <Statistics />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
  // <React.StrictMode>
  // </React.StrictMode>
);
