import React, { useContext, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { getStoredCart } from "../utlis/fakeDB";
import { MapPinIcon, CurrencyDollarIcon } from "@heroicons/react/24/outline";
import AppliedZone from "../AppliedZone/AppliedZone";

const AppliedJobs = () => {
  const applied = useLoaderData();
  // console.log(applied);
  const savedJobs = getStoredCart();

  let jobsAddToCart = [];
  for (const id in savedJobs) {
    const appliedJobs = applied.find((job) => +job.id === +id);
    // console.log(applyJob);
    if (appliedJobs) {
      jobsAddToCart.push(appliedJobs);
    }
  }
 
  const [filter, setFilter] = useState("all");

  const filteredJobs = jobsAddToCart.filter((job) => {
    if (filter === "all") 
    {
      return true;
    } 
    else if (filter === "FullTime")
    {
      return job.FullTime === "FullTime";
    }
    else if (filter === "Remote")
    {
      return job.RemoteJob === "Remote";
    }
    else if (filter === "Onsite")
    {
      return job.OnsiteJob === "Onsite";
    } 
    else 
    {
      return job.PartTime === "PartTime";
    }
    
  });

  return (
    <div>
      <div className="h-[calc(100vh-25rem)] mb-4 flex items-center justify-center bg-gradient-to-r from-[rgba(146,126,192,0.05)] to-[rgba(113,101,146,0.05)]">
        <div className="text-3xl md:text-4xl font-bold">Applied Jobs</div>
      </div>

      <div className="px-10 text-right">
        <div>
          <div className=" ">
            <div className="dropdown">
              <label
                tabIndex={0}
                className="flex items-center whitespace-nowrap rounded bg-info px-6 pb-2 pt-2.5 text-xs font-medium  leading-normal text-white shadow-[0_4px_9px_-4px_#54b4d3] transition duration-150 ease-in-out hover:bg-info-600 hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:bg-info-600 focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:outline-none focus:ring-0 active:bg-info-700 active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] motion-reduce:transition-none"
              >
                Filter {" "}
                <span className="ml-2 w-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content menu p-2 z-[1000] float-left m-0  min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block "
              >
                <li>
                  <a
                    className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                    onClick={() => setFilter("all")}
                  >
                    All
                  </a>
                </li>
                <li>
                  <a
                    className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                    onClick={() => setFilter("FullTime")}
                  >
                    FullTime
                  </a>
                </li>
                <li>
                  <a
                    className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                    onClick={() => setFilter("Remote")}
                  >
                    Remote
                  </a>
                </li>
                <li>
                  <a
                    className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                    onClick={() => setFilter("Onsite")}
                  >
                    On site
                  </a>
                </li>
                <li>
                  <a
                    className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                    onClick={() => setFilter("PartTime")}
                  >
                    Part Time
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div>
        {filteredJobs.map((job) => (
          <AppliedZone key={job.id} job={job}></AppliedZone>
        ))}
      </div>
    </div>
  );
};

export default AppliedJobs;
