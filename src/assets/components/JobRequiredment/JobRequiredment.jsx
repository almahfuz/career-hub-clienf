import React, { useEffect, useState } from "react";
import {
  MapPinIcon,
  EnvelopeIcon,
  PhoneIcon,
  CalendarDaysIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/24/outline";
import { useLoaderData, useParams } from "react-router-dom";

const JobRequiredment = () => {
  const data = useLoaderData();
  const [singleProduct, setSingleProduct] = useState({})
    const { id } = useParams()
    const findProduct = () => {
        setSingleProduct(data.find((product) => product.id === id))
      }
  
      useEffect(() => {
          findProduct()
      }, [id])

      console.log(singleProduct);
      const{companyName,
        JobDescription,
        JobResponsibility,
        EducationalRequirements,
        Experiences,
        salary,
        jobTitle,
        phone,
        email,
        Address

      }=singleProduct;

  return (
    <div>
      <div className="">
        <div className="h-[calc(100vh-25rem)] mb-4 flex items-center justify-center bg-gradient-to-r from-[rgba(146,126,192,0.05)] to-[rgba(113,101,146,0.05)]">
          <div className="text-3xl md:text-4xl font-bold">Job Details: {companyName}</div>
        </div>
        <div className="grid  md:grid-cols-3  md:p-8 p-5 gap-6">
          <div className=" md:col-span-2">
            <div>
              {" "}
              <strong> Job Description:</strong> <p> {JobDescription} </p>
            </div>

            <div className="mt-4">
              <strong> Job Responsibility:</strong> <p> {JobResponsibility}</p>
            </div>
            <div className="mt-4">
              <strong> Educational Requirements:</strong> <p>{EducationalRequirements} </p>
            </div>
            <div className="mt-4">
              <strong> Experiences:</strong> <p> {Experiences}</p>{" "}
            </div>
          </div>
          <div>
            <div className=" p-5">
              <div>
                <div className="rounded-md p-5 bg-gradient-to-r from-[rgba(126,144,254,0.05)] to-[rgba(152,115,255,0.05)]">
                  <p className="pt-2 font-bold"> Job Details</p>
                  <div className="divider mt-0 mb-0"></div>
                  <p className="py-2 font-light flex gap-2 items-center">
                    <span>
                      <CurrencyDollarIcon className="h-5 w-4 text-gray-500" />
                    </span>
                    Salary : {salary}
                  </p>
                  <p className="py-0 pb-5 font-light flex gap-2 items-center">
                    <span>
                      <CalendarDaysIcon className="h-5 w-4 text-gray-500" />
                    </span>
                    Job Title :{jobTitle}
                  </p>
                  <p className="pt-2 font-bold"> Contact Information</p>
                  <div className="divider  mt-0 mb-0"></div>
                  <p className="py-2 font-light flex gap-2 items-center">
                    <span>
                      <PhoneIcon className="h-5 w-4 pt-1 text-gray-500" />
                    </span>{" "}
                    Phone : {phone}
                  </p>
                  <p className="py-2 pb-1 font-light flex gap-2 items-center items-center">
                    <span>
                      <EnvelopeIcon className="h-5 w-4 text-gray-500" />
                    </span>{" "}
                    Email : { Address}
                  </p>
                  <p className="py-2 pb-1 font-light flex gap-2">
                    <span>
                      <MapPinIcon className="h-5 w-4 pt-0.5 text-gray-500" />
                    </span>{" "}
                    Address : { Address}
                  </p>
                </div>
                <div className="mt-5">
                  <button className="Btn-button-indigo w-full">
                    {" "}
                    Apply Now{" "}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobRequiredment;
