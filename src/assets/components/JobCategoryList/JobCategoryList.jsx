import { data } from "autoprefixer";
import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const JobCategoryList = () => {
  const [AvailableJob, setAvailableJob] = useState([]);

  useEffect(() => {
    fetch("jobsProfiles.json")
      .then((res) => res.json())
      .then((data) => setAvailableJob(data));
  });

  return (
    <div className="py-5 mx-4 my-3">
      <div className="pt-5 ">
        <div className="grid items-center justify-items-center text-center gap-4">
          <div className="text-3xl md:text-5xl lg:text-6xl font-bold">
            Job Category List
          </div>
          <div className="pb-5 text-[#757575]">
            Explore thousands of job opportunities with all the information you
            need. Its your future
          </div>
        </div>
        <div>
          <div className=" grid items-center grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-3 p-5">
            {AvailableJob.map((singleJob) => (
              <div key={singleJob.id}>
                <div className="rounded-md p-5 bg-gradient-to-r from-[rgba(126,144,254,0.05)] to-[rgba(152,115,255,0.05)]">
                  <img
                    className="p-3 rounded-md bg-blue-100"
                    src="/src/assets/components/icons/Frame-1.png"
                    alt=""
                  />
                  <p className="py-2 font-bold">{singleJob.CategoryTitle}</p>
                  <p className="py-0 pb-1 font-light">
                    {" "}
                    {singleJob.AvailableJob}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCategoryList;
