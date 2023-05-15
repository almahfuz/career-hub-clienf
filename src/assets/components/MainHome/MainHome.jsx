import React, { useContext, useEffect, useState } from "react";
import Home from "../Home/Home";
import JobCategoryList from "../JobCategoryList/JobCategoryList";
import FeaturedJobs from "../FeaturedJob/FeaturedJobs";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { MapPinIcon, CurrencyDollarIcon } from "@heroicons/react/24/outline";

const MainHome = () => {
  // const jobProductFeature = useLoaderData();

  const [SeeMoreData, setSeeMoreData] =useState(false);

  const[FeaturedJobItems,setFeaturedJobItems ] =useState([]);

  useEffect(()=>{
    fetch('jobsProfiles.json')
    .then(res => res.json())
    .then(data=> setFeaturedJobItems(data));
    
  },[])

  // useEffect(()=>{
  //   setFeaturedJobItems(jobProductFeature);
  // },[])

  return (
    <div>
      <div>
        <Home></Home>
      </div>
      <div>
        <JobCategoryList></JobCategoryList>

        {/* Featured job section  */}
        <div>
          <div className="pt-5 ">
            <div className="py-5 mx-4 my-3">
              <div className="mb-4">
                <div className="grid items-center justify-items-center text-center gap-4">
                  <div className="text-3xl md:text-5xl lg:text-6xl font-bold">
                    Featured Jobs
                  </div>
                  <div className="pb-5 text-[#757575]">
                    Explore thousands of job opportunities with all the
                    information you need. Its your future
                  </div>
                </div>
              </div>
              <div className="mt-5 pt-4">
                <div className=" grid items-center grid-cols-1 md:grid-cols-2 gap-10 md:p-8 lg:p-8 p-2">
                  {FeaturedJobItems.slice(0, SeeMoreData ? SeeMoreData.length:4).map((FeatureJob) => (
                    <FeaturedJobs
                      key={FeatureJob.id}
                      FeatureJob={FeatureJob}
                    ></FeaturedJobs>
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-center">
                <button onClick={()=>setSeeMoreData(!SeeMoreData)} className="Btn-button-indigo">{SeeMoreData?"No more vacancy":"More jobs"} </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainHome;
