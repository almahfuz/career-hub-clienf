import React, { useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { getStoredCart } from "../utlis/fakeDB";
import { MapPinIcon, CurrencyDollarIcon } from "@heroicons/react/24/outline";

const AppliedZone = ({ job }) => {
  const {
    id,
    companyLogo,
    companyName,
    FullTime,
    RemoteJob,
    JobDescription,
    JobResponsibility,
    EducationalRequirements,
    Experiences,
    salary,
    jobTitle,
    phone,
    email,
    Address,
  } = job;
  return (
    <div>
      <div className="mt-5 pt-1">
        <div className="items-center">
          <div className="flex items-center justify-between rounded-md m-3 p-6 bg-gradient-to-r from-[rgba(196,202,242,0.05)] to-[rgba(152,115,255,0.05)]">
            <div className=" flex items-center  justify-items-start gap-5 ">
              <div>
                <img
                  className="p-3 ps-0 rounded-md mt-2 object-cover h-48 w-40"
                  src={companyLogo}
                  alt=""
                />
              </div>
              <div>
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
                <div className="mb-4 mt-2  gap-4">
                  <p className="py-0 pb-1 font-light text-sm flex">
                    <span>
                      <CurrencyDollarIcon className="h-6 w-6 text-gray-500" />
                    </span>
                    Salary : {salary}
                  </p>
                  <p className="py-0 pb-1 font-light text-sm flex ">
                    <span>
                      <MapPinIcon className="h-6 w-6 text-gray-500" />
                    </span>{" "}
                    Address: {Address}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-end">
            <Link to={`/details/${id}`}>
              <button className="Btn-button-indigo">View Details</button>
            </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppliedZone;
