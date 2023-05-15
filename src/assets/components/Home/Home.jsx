import React from "react";
import HeaderImg from '../images/person-photo.png';
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-gradient-to-r from-[rgba(160,120,252,0.05)] to-[rgba(152,115,255,0.05)]">
      <div className="grid grid-cols-1 grid-flow-row md:grid-cols-2 gap-2 px-4  mx-4 py-4 items-center">
        <div className="p-4 order-2 md:order-1 ">
          <div className="p-2 mb-1">
            <div className="sm:text-4xl  md:text-6xl  lg:text-7xl capitalize font-semibold tracking-wide pb-4">
              One Step Closer To Your{" "}
              <span className="text-indigo-500"> Dream Job</span>{" "}
            </div>
            <p className="pb-5 text-[#757575]">
              {" "}
              Explore thousands of job opportunities with all the information
              you need. Its your future. Come find it. Manage all your job
              application from start to finish.
            </p>
            <Link to="/appliedJobs">
              {" "}
              <button className="Btn-button-indigo"> Get Started </button>
            </Link>
          </div>
        </div>
        <div className=" order-1 md:order-2">
          <img
            className="object-cover w-full "
            src={HeaderImg}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
