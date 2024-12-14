import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

const MyPostedJobs = () => {
  const [jobs, setJobs] = useState([]);
  const { user } = useAuth();
  useEffect(() => {
    if (user.email) {
      fetch(`http://localhost:5000/jobs?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => setJobs(data));
    }
  }, [user?.email]);
  return (
    <div>
      <h2 className="text-3xl">Posted Job List: {jobs.length}</h2>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Job Title</th>
              <th>Job Deadline</th>
              <th>Application Count</th>
              <th>MY Favourite</th>
            </tr>
          </thead>
          <tbody>
    
         {
            jobs.map((job, index) => <tr key={job._id}>
                <th>{index+1}</th>
                <td>{job.title}</td>
                <td>{job.applicationDeadline}</td>
                <td>{job.applicationCount}</td>
               
              </tr>)
         }
             
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyPostedJobs;
