import React from "react";
import { MapPinIcon, CurrencyDollarIcon } from "@heroicons/react/24/outline";

const AppliedZone = () => {
  return (
    <div>
      <div className="">
        <div className="">
          <div className="h-[calc(100vh-25rem)] mb-4 flex items-center justify-center bg-gradient-to-r from-[rgba(146,126,192,0.05)] to-[rgba(113,101,146,0.05)]">
            <div className="text-3xl md:text-4xl font-bold">Applied Jobs</div>
          </div>

          <div className="mt-5 pt-4">
            <div className="items-center  md:p-8 lg:p-8 p-2">
              <div className="flex items-center justify-between rounded-md m-3 p-6 bg-gradient-to-r from-[rgba(196,202,242,0.05)] to-[rgba(152,115,255,0.05)]">
                <div className=" flex items-center  justify-items-start gap-5 ">
                  <div>
                    <img
                      className="p-3 ps-0 rounded-md mt-2"
                      src="/src/assets/components/images/google-1-1 1.png"
                      alt=""
                    />
                  </div>
                  <div>
                    <p className="py-3 font-bold ">
                      Technical Database Engineer
                    </p>
                    <p className="py-0 pb-2 font-light">Google LLC</p>
                    <div className="py-2 ">
                      <button className="me-2 btn-sm btn  btn-outline btn-info">
                        Full Time
                      </button>
                      <button className="btn-sm btn btn-outline btn-info">
                        {" "}
                        Remote
                      </button>
                    </div>
                    <div className="mb-4 mt-2 flex gap-4">
                      <p className="py-0 pb-1 font-light text-sm flex ">
                        <span>
                          <MapPinIcon className="h-6 w-6 text-gray-500" />
                        </span>{" "}
                        Dhaka, Bangladesh
                      </p>
                      <p className="py-0 pb-1 font-light text-sm flex">
                        <span>
                          <CurrencyDollarIcon className="h-6 w-6 text-gray-500" />
                        </span>
                        Salary : 100K - 150K
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-end">
                  <button className="Btn-button-indigo"> View Details </button>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between rounded-md m-3 p-6 bg-gradient-to-r from-[rgba(196,202,242,0.05)] to-[rgba(152,115,255,0.05)]">
                  <div className=" flex items-center  justify-items-start gap-5 ">
                    <div>
                      <img
                        className="p-3 ps-0 rounded-md mt-2"
                        src="/src/assets/components/images/google-1-1 1.png"
                        alt=""
                      />
                    </div>
                    <div>
                      <p className="py-3 font-bold ">
                        Technical Database Engineer
                      </p>
                      <p className="py-0 pb-2 font-light">Google LLC</p>
                      <div className="py-2 ">
                        <button className="me-2 btn-sm btn  btn-outline btn-info">
                          Full Time
                        </button>
                        <button className="btn-sm btn btn-outline btn-info">
                          {" "}
                          Remote
                        </button>
                      </div>
                      <div className="mb-4 mt-2 flex gap-4">
                        <p className="py-0 pb-1 font-light text-sm flex ">
                          <span>
                            <MapPinIcon className="h-6 w-6 text-gray-500" />
                          </span>{" "}
                          Dhaka, Bangladesh
                        </p>
                        <p className="py-0 pb-1 font-light text-sm flex">
                          <span>
                            <CurrencyDollarIcon className="h-6 w-6 text-gray-500" />
                          </span>
                          Salary : 100K - 150K
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-end">
                    <button className="Btn-button-indigo">
                      {" "}
                      View Details{" "}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppliedZone;
