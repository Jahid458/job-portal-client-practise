import React, { useEffect, useState } from 'react';
import HotJobsCard from './HotJobsCard';

const Hotjobs = () => {
    const [jobs,setJobs] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/jobs')
        .then(res => res.json())
        .then(data => {
            setJobs(data);
        })

    },[])
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
                {
                    jobs.map(job => <HotJobsCard key={job._id} job={job}></HotJobsCard>)
                }
            </div>
            
        </div>
    );
};

export default Hotjobs;