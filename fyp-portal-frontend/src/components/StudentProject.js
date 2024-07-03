import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import StudentSideBar from "./StudentSideBar";
import axios from 'axios';

function StudentProject() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
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

      console.log('API Response:', response.data); // Log the response to inspect its structure

      // Check if response.data is an array (assuming it directly returns an array)
      if (Array.isArray(response.data)) {
        setData(response.data);
      } else {
        throw new Error('Unexpected API response structure: projects array not found');
      }
    } catch (error) {
      console.error('Error fetching projects:', error.response?.data || error.message);
      // Handle errors, e.g., redirect to login page on unauthorized
      // Example: redirect to login if token is expired
      // if (error.response?.status === 401) {
      //   history.push('/login'); // Assuming you have a login route
      // }
    }
  };

  return (
    <div>
      <div>
        <StudentSideBar />
      </div>

      <div className='container flex ml-72 mr-12 items-center justify-center w-auto h-16 bg-gray-100 mt-16 '>
        <span className='font-bold'>Department Name: </span>
        <span>Computer Science and IT</span>
      </div>

      <div className="w-[950px] ml-[285px] h-96 mt-5 mb-10 rounded-lg bg-gray-100">
        <span className="font-semibold ml-5">Student Portal</span>
        <div className="submenue rounded-full w-3/4 ml-6 mt-2 border-blue-300 border-2 h-12">
          <ul className="flex">
            <Link to='/StudentTasks'>
              <li className="flex-1 mt-2 ml-8 cursor-pointer">Tasks</li>
            </Link>
            <Link to='/StudentMeeting'>
              <li className="flex-1 mt-2 ml-8 cursor-pointer">Meeting</li>
            </Link>
            <Link to='/Chat' className="flex-1 mt-2 ml-8 cursor-pointer">Chat</Link>
          </ul>
        </div>

        <table className="table-auto w-full mt-8">
          <thead className="">
            <tr className="header bg-blue-200">
              <th>S/NO</th>
              <th>Project Name</th>
              <th>Supervisor</th>
              <th>Project Type</th>
              <th>Group Members</th>
              <th>Degree Type</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody className="">
            {data.map((project, index) => (
              <tr key={index} className={index % 2 === 0 ? "bg-purple-200 py-2" : ""}>
                <td>{index + 1}</td>
                <td>{project.projectTitle}</td>
                <td>{project.supervisor?.profile?.fullName || 'N/A'}</td>
                <td>{project.projectType}</td>
                <td>{project.groupMembers.join(", ")}</td>
                <td>{project.program}</td>
                <td>{project.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default StudentProject;
