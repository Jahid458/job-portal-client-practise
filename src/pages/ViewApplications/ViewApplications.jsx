import React from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const ViewApplications = () => {
  const applications = useLoaderData();

  const handleStatusUpdate = (e, id) => {
    console.log(e.target.value,id);
    const data = {
        status: e.target.value 
    }
    fetch(`http://localhost:5000/job-applications/${id}`,{
        method:'PATCH',
        headers:{
            'content-type': 'application/json'
        },
        body:JSON.stringify(data)
    })
    .then(res=> res.json())
    .then(data => {
        if (data.modifiedCount) {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Status Has been Updated",
                showConfirmButton: false,
                timer: 1500
                });  }
    })
  } 

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
              <th>Status</th>
              <th>Updated Status</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((app, index) => (
              <tr key={app._id}>
                <th>{index + 1}</th>
                <td>{app.applicant_email}</td>
                <td>{app.linkedIn}</td>
                <td>{app.resume}</td>
                <td>
                  <select
                  onChange={(e)=>handleStatusUpdate(e, app._id)}
                  defaultValue={app.status || 'Change Status'}
                  className="select select-bordered select-xs w-full max-w-xs">
                    <option disabled >Change Status</option>
                    <option>Under Review</option>
                    <option>set Interview</option>
                    <option>Hired</option>
                    <option>Rejected</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewApplications;
