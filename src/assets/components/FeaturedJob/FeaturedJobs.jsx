import { data } from "autoprefixer";
import React, { useEffect, useState } from "react";
import { MapPinIcon, CurrencyDollarIcon } from "@heroicons/react/24/outline";
import { Link, useLoaderData } from "react-router-dom";

const FeaturedJobs = ({ JobItems }) => {
  const {
    companyLogo,
    companyName,
    jobTitle,
    RemoteJob,
    Location,
    FullTime,
    PartTime,
    salary,
  } = JobItems;

  return (
    <div>
      <div>
        <div>
          <div className="">
            <div className="rounded-md p-6 bg-gradient-to-r from-[rgba(196,202,242,0.05)] to-[rgba(152,115,255,0.05)]">
              <img
                className="p-3 ps-0 rounded-md mt-2 h-20 w-48"
                src={companyLogo}
                alt=""
              />
              <p className="py-3 font-bold ">{jobTitle}</p>
              <p className="py-0 pb-2 font-light">{companyName}</p>
              <div className="py-2 ">
                <button className="me-2 btn-sm btn  btn-outline btn-info">
                  {FullTime}
                </button>
                <button className="btn-sm btn btn-outline btn-info">
                  {RemoteJob}
                </button>
              </div>
              <div className="mb-4 flex gap-4">
                <p className="py-0 pb-1 font-light text-sm flex ">
                  <span>
                    <MapPinIcon className="h-6 w-6 text-gray-500" />
                  </span>{" "}
                  {Location}
                </p>
                <p className="py-0 pb-1 font-light text-sm flex">
                  <span>
                    <CurrencyDollarIcon className="h-6 w-6 text-gray-500" />
                  </span>
                  {salary}
                </p>
              </div>

              <Link to={`../jobDetails/${JobItems.id} `}  className="Btn-button-indigo">   View Details </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedJobs;
