import React, { useEffect, useState } from "react";
import axios from 'axios';
import SupervisorSidebar from './SupervisorSidebar';

function SupervisorProjectRequest() {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    fetchRequests();
  }, []);

  const fetchRequests = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('No token found');
      }

      const response = await axios.get('http://localhost:3000/api/projects/requests', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
       
      setRequests(response.data);
       // Assuming your API returns requests in the structure { requests: [...] }
    } catch (error) {
      console.error('Error fetching requests:', error.response?.data || error.message);
    }
  };

  const handleAccept = async (requestId) => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('No token found');
      }
  
      const response = await axios.put(`http://localhost:3000/api/projects/requests/${requestId}/accept`, {}, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      
      console.log(response.data.message); // Log success message or handle as needed
  
      // Remove the accepted project from the requests state
      setRequests(prevRequests => prevRequests.filter(request => request._id !== requestId));
      
      // You can optionally fetch updated projects from another API endpoint or update your state accordingly
  
    } catch (error) {
      console.error('Error accepting request:', error.response?.data || error.message);
    }
  };

  const handleReject = async (requestId) => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('No token found');
      }

      const response = await axios.put(`http://localhost:3000/api/projects/requests/${requestId}/reject`, {}, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      console.log(response.data.message); // Log success message or handle as needed
      fetchRequests(); // Fetch updated requests after reject
    } catch (error) {
      console.error('Error rejecting request:', error.response?.data || error.message);
    }
  };
  return (
    <div>
      <SupervisorSidebar />
      <div>
        <div className='container flex ml-72 mr-12 items-center justify-center w-auto h-16 bg-gray-100 mt-16 '>
          <span className='font-bold'>Department Name: </span>
          <span>Computer Science and IT</span>
        </div>

        <div className="w-[950px] ml-[285px] h-96 mt-5 mb-10 rounded-lg bg-gray-100">
          <span className="font-semibold ml-5">Supervisor Portal</span>
          <table className="table-auto w-full mt-8">
            <thead>
              <tr className="header bg-blue-200">
                <th>ID</th>
                <th>Student Names</th>
                <th>Title</th>
                <th>Program</th>
                <th>Proposal</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {requests.map((request, index) => (
              
                <tr key={index} className={index % 2 === 0 ? "bg-purple-200 py-2" : ""}>
                  <td>{request._id}</td>
                  <td>{request.student._id}</td>
                  <td>{request.projectTitle}</td>
                  <td>{request.program}</td>
                  <td>{request.proposal}</td>
                  <td>
                    <div className="flex">
                      <button
                        onClick={() => handleAccept(request._id)}
                        className="rounded px-2 py-1 text-xs bg-green-500 text-white hover:bg-green-600 duration-300"
                      >
                        ACCEPT
                      </button>
                      <button
                        onClick={() => handleReject(request._id)}
                        className="rounded mx-2 px-2 py-1 text-xs bg-red-500 text-white hover:bg-red-600 duration-300"
                      >
                        REJECT
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default SupervisorProjectRequest;
