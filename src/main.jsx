import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./component/Main/Main";
import JobDetails from "./component/JobDetails/JobDetails";
import Home from "./component/Home/Home";
import Statistics from "./component/Statistics/Statistics";
import AppliedJobs from "./component/AppliedJobs/AppliedJobs";
import Blog from "./component/Blog/Blog";
import Faq from "./component/Faq/Faq";

const router = createBrowserRouter([
   {
      path: "/",
      element: <Main></Main>,
      children: [
         {
            path: "/",
            element: <Home></Home>,
         },
         {
            path: "/home",
            element: <Home></Home>,
         },
         {
            path: "/statistics",
            element: <Statistics></Statistics>,
         },
         {
            path: "/applied-jobs",
            element: <AppliedJobs></AppliedJobs>,
         },
         {
            path: "/blogs",
            element: <Blog></Blog>,
         },
         {
            path: "/faq",
            element: <Faq></Faq>,
         },
         {
            path: "/job/:jobId",
            element: <JobDetails></JobDetails>,
         },
      ],
   },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
      <RouterProvider router={router}></RouterProvider>
   </React.StrictMode>
);
