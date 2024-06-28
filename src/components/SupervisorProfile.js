import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SupervisorSidebar from './SupervisorSidebar';

function SupervisorProfile() {
  const [data, setData] = useState({
    supervisorName: '',
    idNo: '',
    email: '',
    phoneNo: '',
    designation: '',
    interestedArea: '',
    projectType: '',
    program: '',
    levelOfStudies: '',
  });

  useEffect(() => {
    // Fetch data from mock API using fetch
    fetch('https://jsonplaceholder.typicode.com/users/1') // Replace with your API endpoint
      .then(response => response.json())
      .then(user => {
        setData({
          supervisorName: user.name,
          idNo: user.id.toString(),
          email: user.email,
          phoneNo: user.phone,
          designation: 'Professor', // Mock designation
          interestedArea: 'AI', // Mock interested area
          projectType: 'Web Development', // Mock project type
       
          levelOfStudies: 'PhD', // Mock level of studies
        });
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <div>
        <SupervisorSidebar />
      </div>

      <div className="container flex ml-72 mr-12 items-center justify-center w-auto h-16 bg-gray-100 mt-16">
        <span className="font-bold">Department Name:</span>
        <span>Computer Science and IT</span>
      </div>
      <div className="w-[930px] ml-72 mt-5 h-96 mb-36 rounded-lg bg-gray-100">
        <div className="bg-purple-300 h-10 w-5/3 mt-3 rounded-lg">
          <span className="ml-4 font-bold">My Profile - Supervisor</span>
        </div>

        <div className="flex">
          <form className="bg-white shadow-md rounded-lg p-6 w-full">
            <div className="grid grid-cols-2 gap-6 w-5/6">
              {/* Left Side */}
              <div className="col-span-1">
                <div className="mb-4 flex items-center">
                  <label htmlFor="supervisorName" className="block text-sm font-semibold text-gray-700 w-24">
                    Full Name:
                  </label>
                  <input
                    type="text"
                    id="supervisorName"
                    value={data.supervisorName}
                    readOnly
                    className="mt-1 focus:ring-indigo-500 bg-gray-200 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 border-2 rounded-md"
                  />
                </div>
                <div className="mb-4 flex items-center">
                  <label htmlFor="idNo" className="block text-sm font-semibold text-gray-700 w-14">
                    ID No:
                  </label>
                  <input
                    type="text"
                    id="idNo"
                    value={data.idNo}
                    readOnly
                    className="mt-1 focus:ring-indigo-500 ml-6 bg-gray-200 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 border-2 rounded-md"
                  />
                </div>
                <div className="mb-4 flex items-center">
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mr-2">
                    Email:
                  </label>
                  <input
                    type="text"
                    id="email"
                    value={data.email}
                    readOnly
                    className="focus:ring-indigo-500 bg-gray-200 ml-7 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 border-2 rounded-md"
                  />
                </div>
                <div className="mb-4 flex items-center">
                  <label htmlFor="phoneNo" className="block text-sm font-semibold text-gray-700 w-24 mr-2">
                    Phone No:
                  </label>
                  <input
                    type="text"
                    id="phoneNo"
                    value={data.phoneNo}
                    readOnly
                    className="focus:ring-indigo-500 -ml-1 bg-gray-200 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 border-2 rounded-md"
                  />
                </div>
                <div className="mb-4 flex items-center">
                  <label htmlFor="designation" className="block text-sm font-semibold text-gray-700 w-24 mr-2">
                    Designation:
                  </label>
                  <input
                    type="text"
                    id="designation"
                    value={data.designation}
                    readOnly
                    className="focus:ring-indigo-500 -ml-1 bg-gray-200 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 border-2 rounded-md"
                  />
                </div>
              </div>

              {/* Right Side */}
              <div className="col-span-1">
                <div className="mb-4 flex items-center">
                  <label htmlFor="interestedArea" className="block text-sm font-semibold text-gray-700 w-16 mr-2">
                    Interested Area:
                  </label>
                  <input
                    id="interestedArea"
                    value={data.interestedArea}
                    disabled
                    className="mt-1 ml-2 focus:ring-indigo-500 bg-gray-200 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 border-2 rounded-md"
                  >
                    
                  </input>
                </div>

                <div className="mb-4 flex items-center">
                  <label htmlFor="projectType" className="block text-sm font-semibold text-gray-700 mr-2">
                    Project Type:
                  </label>
                  <input
                    id="projectType"
                    value={data.projectType}
                    disabled
                    className="mt-1 focus:ring-indigo-500 bg-gray-200 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 border-2 rounded-md"
                  >
                   
                  </input>
                </div>
                {/* <div className="mb-4 flex items-center">
                  <label htmlFor="program" className="block text-sm font-semibold text-gray-700 mr-4">
                    Program:
                  </label>
                  <input
                    id="program"
                    value={data.program}
                    disabled
                    className="mt-1 focus:ring-indigo-500 -ml-3 bg-gray-200 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 border-2 rounded-md"
                  >
               
                  </input>
                </div> */}
                <div className="mb-4 flex items-center">
                  <label htmlFor="levelOfStudies" className="block text-sm font-semibold text-gray-700 w-42">
                    Level of Studies:
                  </label>
                  <input
                    type="text"
                    id="levelOfStudies"
                    value={data.levelOfStudies}
                    readOnly
                    autoComplete="levelOfStudies"
                    className="mt-1 -ml-3 focus:ring-indigo-500 bg-gray-200 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 border-2 rounded-md"
                  />
                </div>

                <div className="ml-72">
                  <Link to="/SupervisorEditProfile">
                    <button
                      type="button"
                      className="text-white bg-purple-800 hover:bg-purple-600 focus:ring-4 focus:ring-purple-900 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 "
                    >
                      Edit
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SupervisorProfile;
