import { data } from "autoprefixer";
import React, { useEffect, useState } from "react";
import { MapPinIcon, CurrencyDollarIcon } from "@heroicons/react/24/outline";
import { Link, useLoaderData, useNavigate } from "react-router-dom";

const FeaturedJobs = ({ FeatureJob }) => {
  const {
    id,
    companyLogo,
    companyName,
    jobTitle,
    RemoteJob,
    Location,
    FullTime,
    PartTime,
    salary,
  } = FeatureJob;

  return (
    <div>
      <div>
        <div className="">
          <div className="rounded-md p-6 bg-gradient-to-r from-[rgba(196,202,242,0.05)] to-[rgba(152,115,255,0.05)]">
            <img
              className=" ps-0 p-2 mt-2 h-28 w-28 object-contain "
              src={companyLogo}
              alt=""
            />
            <div className="font-bold ">{jobTitle}</div>
            <div className="py-0 pb-2 font-light">{companyName}</div>
            <div className="py-1 ">
              <button className="me-2 btn-sm btn  btn-outline btn-info">
                {FullTime}
              </button>
              <button className="btn-sm btn btn-outline btn-info">
                {RemoteJob}
              </button>
            </div>
            <div className="mb-4 flex gap-4">
              <div className="py-0 pb-1 font-light text-sm flex ">
                <span>
                  <MapPinIcon className="h-6 w-6 text-gray-500" />
                </span>{" "}
                {Location}
              </div>
              <div className="py-0 pb-1 font-light text-sm flex">
                <span>
                  <CurrencyDollarIcon className="h-6 w-6 text-gray-500" />
                </span>
                {salary}
              </div>
            </div>
            <Link to={`details/${id}`}>
              <button className="Btn-button-indigo">View Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedJobs;
