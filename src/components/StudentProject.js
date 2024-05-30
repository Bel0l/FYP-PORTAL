import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import StudentSideBar from "./StudentSideBar";

// Simulate the logged-in student ID
const currentStudentId = 1; // This should be dynamically determined based on the actual logged-in user

function StudentProject() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=9") // Fetching 9 users to create 3 projects
      .then(response => response.json())
      .then(data => {
        const projects = [];
        for (let i = 0; i < data.results.length; i += 3) {
          const project = {
            id: (i / 3) + 1,
            name: `Project ${i / 3 + 1}`,
            supervisor: `${data.results[i].name.first} ${data.results[i].name.last}`,
            projectType: "Research", // Example project type
            groupMembers: [
              { id: i, name: `${data.results[i]?.name.first} ${data.results[i]?.name.last}` },
              { id: i + 1, name: `${data.results[i + 1]?.name.first} ${data.results[i + 1]?.name.last}` },
              { id: i + 2, name: `${data.results[i + 2]?.name.first} ${data.results[i + 2]?.name.last}` }
            ],
            degreeType: "Undergraduate" // Example degree type
          };
          projects.push(project);
        }

        // Find the project(s) for the current student
        const studentProjects = projects.filter(project =>
          project.groupMembers.some(member => member.id === currentStudentId)
        );

        setData(studentProjects);
      });
  }, []);

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
        <span className="font-semibold ml-5">Admin Portal</span>
        <div className="submenue rounded-full w-3/4 ml-6 mt-2 border-blue-300 border-2 h-12">
          <ul className="flex">
            <li className="flex-1 ml-8 mt-2">Students</li>
            <li className="flex-1 mt-2 cursor-pointer">Supervisors</li>
            <Link to='/Projects' className="flex-1 mt-2 cursor-pointer">Projects</Link>
          </ul>
        </div>
        {/* SearchBar */}
        <div className="search mx-1 my-1">
          <div className="relative flex w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
            <input
              className="peer h-full w-full outline-none text-sm text-gray-700 pr-2 pl-10"
              type="text"
              id="search"
              placeholder="Search something.."
            />
            <div className="absolute left-0 inset-y-0 flex items-center pl-3 pointer-events-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
        </div>

        <table className="table-auto w-full">
          <thead className="">
            <tr className="header bg-blue-200">
              <th>S/NO</th>
              <th>Project Name</th>
              <th>Supervisor</th>
              <th>Project Type</th>
              <th>Group Members</th>
              <th>Degree Type</th>
            </tr>
          </thead>
          <tbody className="">
            {data.map((project, index) => (
              <tr key={index} className={index % 2 === 0 ? "bg-purple-200 py-2" : ""}>
                <td>{project.id}</td>
                <td>{project.name}</td>
                <td>{project.supervisor}</td>
                <td>{project.projectType}</td>
                <td>{project.groupMembers.map(member => member.name).join(", ")}</td>
                <td>{project.degreeType}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default StudentProject;
