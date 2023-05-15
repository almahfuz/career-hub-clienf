import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError();
    // console.log(error);
    return (
        <div className=''>
           <div className="h-screen flex flex-col  items-center justify-center bg-gradient-to-r from-[rgba(146,126,192,0.05)] to-[rgba(113,101,146,0.05)]">
          <div className="font-semibold">
            <div>
            Sorry, your expected data Not found {error. status || " Please try again !"}
            </div> <br />
            <i></i>
           </div> <br />
           <Link  className=" mt-2 flex  items-center whitespace-nowrap rounded bg-info px-6 pb-2 pt-2.5 text-xs font-medium  leading-normal text-white shadow-[0_4px_9px_-4px_#54b4d3] transition duration-150 ease-in-out hover:bg-info-600 hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:bg-info-600 focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:outline-none focus:ring-0 active:bg-info-700 active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] motion-reduce:transition-none" to="/">Please, Back to Home</Link>

        </div>
        </div>
    );
};

export default ErrorPage;