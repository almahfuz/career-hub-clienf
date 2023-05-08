import React from "react";
import { MapPinIcon, EnvelopeIcon,PhoneIcon,CalendarDaysIcon,CurrencyDollarIcon } from '@heroicons/react/24/outline';

const JobDetails = () => {
  return (
    <div className="">
      <div className="h-[calc(100vh-25rem)] mb-4 flex items-center justify-center bg-gradient-to-r from-[rgba(146,126,192,0.05)] to-[rgba(113,101,146,0.05)]">
        <div className="text-3xl md:text-4xl font-bold">
          Job Details
        </div>
      </div>
      {/* ----------- */}
      <div className="grid  md:grid-cols-3  md:p-8 p-5 gap-6">
        <div className=" md:col-span-2">
        <div> <strong> Job Description:</strong> <p >  A UI/UX (User Interface/User Experience) designer is responsible for designing and creating engaging and effective interfaces for software and web applications. This includes designing the layout, visual design, and interactivity of the user interface. </p></div>
            <div className="mt-4"><strong> Job Responsibility:</strong> <p> Collaborating with cross-functional teams: UI/UX designers often work closely with other teams, including product management, engineering, and marketing, to ensure that the user interface is aligned with business and technical requirements. You will need to be able to effectively communicate your design ideas and gather feedback from other team members.</p></div>
            <div className="mt-4"><strong> Educational Requirements:</strong> <p> Bachelor degree to complete any reputational university.</p></div>
            <div className="mt-4"><strong> Experiences:</strong> <p> 2-3 Years in this field.</p> </div>
           
        </div>
        <div>
        <div className=" p-5">
            
              <div>
                <div className="rounded-md p-5 bg-gradient-to-r from-[rgba(126,144,254,0.05)] to-[rgba(152,115,255,0.05)]">
                  <p className="pt-2 font-bold"> Job Details</p>
                  <div className="divider mt-0 mb-0"></div> 
                  <p className="py-2 font-light flex gap-2 items-center">
                     <span><CurrencyDollarIcon className="h-5 w-4 text-gray-500" /></span>
                  Salary : 100K - 150K (Per Month)</p>
                  <p className="py-0 pb-5 font-light flex gap-2 items-center">
                  <span><CalendarDaysIcon className="h-5 w-4 text-gray-500" /></span>Job Title : Product Designer
                  </p>
                  <p className="pt-2 font-bold"> Contact Information</p>
                  <div className="divider  mt-0 mb-0"></div> 
                  <p className="py-2 font-light flex gap-2 items-center">
                  <span><PhoneIcon className="h-5 w-4 pt-1 text-gray-500" /></span> Phone : 01750-00 00 00
                  </p>
                  <p className="py-2 pb-1 font-light flex gap-2 items-center items-center">
                  <span><EnvelopeIcon className="h-5 w-4 text-gray-500" /></span> Email : info@gmail.com
                  </p>
                  <p className="py-2 pb-1 font-light flex gap-2">
                  <span><MapPinIcon className="h-5 w-4 pt-0.5 text-gray-500" /></span> Address : Dhanmondi 32, Sukrabad
                    Dhaka, Bangladesh
                  </p>
                  
                </div>
                <div className="mt-5">
                  <button className="Btn-button-indigo w-full"> Apply Now </button>
                  </div>
              </div>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;

