import React from "react";
import { useLoaderData } from "react-router-dom";

const ViewApplications = () => {
  const applications = useLoaderData();

  return (
    <div>
      <h3 className="text-3xl">
        Applications For This Job:{applications.length}
      </h3>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Email</th>
              <th>Linked Link</th>
              <th>Git Link</th>
            </tr>
          </thead>
          <tbody>


            {
                applications.map((app, index) => <tr key={app._id}>
                    <th>{index + 1}</th>
                    <td>{app.applicant_email}</td>
                    <td>{app.linkedIn}</td>
                    <td>{app.resume}</td>
                  </tr>)
            }
        
            
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewApplications;
