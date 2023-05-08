import React from 'react';
import Home from '../Home/Home';
import JobCategoryList from '../JobCategoryList/JobCategoryList';
import FeaturedJobs from '../FeaturedJob/FeaturedJobs';

const AppliedJobs = () => {

    
    return (
        <div>
            <div>
            <Home></Home>
            </div>
            <div>
                <JobCategoryList></JobCategoryList>
                <FeaturedJobs></FeaturedJobs>
            </div>

            
        </div>
    );
};

export default AppliedJobs;