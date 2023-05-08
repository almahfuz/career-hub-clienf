import { data } from "autoprefixer";
import React, { useEffect, useState } from "react";
import { MapPinIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline';

const FeaturedJobs = () => {
  return (
    <div className="py-5 mx-4 my-3">
      <div className="pt-5 ">
        <div className="mb-4">
          <div className="grid items-center justify-items-center text-center gap-4">
            <div className="text-3xl md:text-5xl lg:text-6xl font-bold">
              Featured Jobs
            </div>
            <div className="pb-5 text-[#757575]">
              Explore thousands of job opportunities with all the information
              you need. Its your future
            </div>
          </div>
        </div>

        <div className="mt-5 pt-4">
          <div className=" grid items-center grid-cols-1 md:grid-cols-2 gap-10 md:p-8 lg:p-8 p-2">
            <div className="">
              <div className="rounded-md p-6 bg-gradient-to-r from-[rgba(196,202,242,0.05)] to-[rgba(152,115,255,0.05)]">
                <img
                  className="p-3 ps-0 rounded-md mt-2"
                  src="/src/assets/components/images/google-1-1 1.png"
                  alt=""
                />
                <p className="py-3 font-bold ">Technical Database Engineer</p>
                <p className="py-0 pb-2 font-light">Google LLC</p>
                <div className="py-2 ">
                <button className="me-2 btn-sm btn  btn-outline btn-info" >Full Time</button>
                  <button className="btn-sm btn btn-outline btn-info"> Remote</button>
                  
                </div>
                <div className="mb-4 flex gap-4">
                  <p className="py-0 pb-1 font-light text-sm flex "><span><MapPinIcon className="h-6 w-6 text-gray-500" /></span> Dhaka, Bangladesh</p>
                  <p className="py-0 pb-1 font-light text-sm flex"><span><CurrencyDollarIcon className="h-6 w-6 text-gray-500" /></span>Salary : 100K - 150K</p>
                </div>
                <button className="Btn-button-indigo"> View Details </button>
              </div>
            </div>

            <div>
            <div className="">
              <div className="rounded-md p-6 bg-gradient-to-r from-[rgba(196,202,242,0.05)] to-[rgba(152,115,255,0.05)]">
                <img
                  className="p-3 ps-0 rounded-md mt-2"
                  src="/src/assets/components/images/google-1-1 1.png"
                  alt=""
                />
                <p className="py-3 font-bold ">Technical Database Engineer</p>
                <p className="py-0 pb-2 font-light">Google LLC</p>
                <div className="py-2 ">
                <button className="me-2 btn-sm btn  btn-outline btn-info" >Full Time</button>
                  <button className="btn-sm btn btn-outline btn-info"> Remote</button>
                  
                </div>
                <div className="mb-4 flex gap-4">
                  <p className="py-0 pb-1 font-light text-sm flex "><span><MapPinIcon className="h-6 w-6 text-gray-500" /></span> Dhaka, Bangladesh</p>
                  <p className="py-0 pb-1 font-light text-sm flex"><span><CurrencyDollarIcon className="h-6 w-6 text-gray-500" /></span>Salary : 100K - 150K</p>
                </div>
                <button className="Btn-button-indigo"> View Details </button>
              </div>
            </div>
            </div>

          </div>
          <div className="flex items-center justify-center">
          <button className="Btn-button-indigo"> See All Jobs </button>

          </div>
         
        </div>
        
      </div>
    </div>
  );
};

export default FeaturedJobs;
