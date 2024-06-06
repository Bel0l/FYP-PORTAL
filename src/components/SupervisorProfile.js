import React from "react";
import SupervisorSidebar from "./SupervisorSidebar";

function SupervisorProfile() {
  return (
    <div>
      <div>
        <SupervisorSidebar />
      </div>

      <div className="container flex ml-72 mr-12 items-center justify-center w-auto h-16 bg-gray-100 mt-16 ">
        <span className="font-bold">Department Name:</span>

        <span>Computer Science and IT</span>
      </div>
      <div className=" w-[930px] ml-72 mt-5 h-96 mb-36 rounded-lg bg-gray-100 ">
        <div className="bg-purple-300 h-10 w-5/3  mt-3 rounded-lg">
          <span className="ml-4 font-bold ">My Profile - Supervisor</span>
        </div>

        <div className="flex">
          <form className="bg-white shadow-md rounded-lg p-6 w-full  ">
            <div className="grid grid-cols-2 gap-6 w-5/6">
              {/* Left Side */}
              <div className="col-span-1">
                <div className="mb-4 flex items-center">
                  <label
                    htmlFor="projectTitle"
                    className="block text-sm font-semibold text-gray-700 w-24  "
                  >
                    Full Name:
                  </label>
                  <input
                    type="text"
                    id="SupervisorName"
                    placeholder="Name"
                    name=""
                    className="mt-1 focus:ring-indigo-500 bg-gray-200 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 border-2 rounded-md"
                  />
                </div>
                <div className="mb-4 flex items-center">
                  <label
                    htmlFor="description"
                    className="block text-sm font-semibold text-gray-700  w-14  "
                  >
                    ID No:
                  </label>
                  <input
                    id="description"
                    name="description"
                    rows="1"
                    placeholder="Enter your Reg No"
                    className="mt-1 focus:ring-indigo-500 ml-6  bg-gray-200 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 border-2 rounded-md"
                  ></input>
                </div>
                <div className="mb-4 flex items-center">
                  <label
                    htmlFor="proposal"
                    className="block text-sm font-semibold text-gray-700 mr-2 "
                  >
                    Email:
                  </label>
                  <input
                    type="text"
                    id="proposal"
                    name="proposal"
                    placeholder="No files Uploaded"
                    className="focus:ring-indigo-500 bg-gray-200 ml-7 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 border-2 rounded-md"
                  />
                </div>
                <div className="mb-4 flex items-center">
                  <label
                    htmlFor="proposal"
                    className="block text-sm font-semibold text-gray-700 w-24 mr-2 "
                  >
                    Phone No:
                  </label>
                  <input
                    type="text"
                    id="proposal"
                    name="proposal"
                    placeholder="No files Uploaded"
                    className="focus:ring-indigo-500 -ml-1 bg-gray-200 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 border-2 rounded-md"
                  />
                </div>
                <div className="mb-4 flex items-center">
                  <label
                    htmlFor="proposal"
                    className="block text-sm font-semibold text-gray-700 w-24 mr-2 "
                  >
                    Designation:
                  </label>
                  <input
                    type="text"
                    id="proposal"
                    name="proposal"
                    placeholder="No files Uploaded"
                    className="focus:ring-indigo-500 -ml-1 bg-gray-200 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 border-2 rounded-md"
                  />
                </div>
              </div>

              {/* Right Side */}
              <div className="col-span-1">
                <div className="mb-4 flex items-center">
                  <label
                    htmlFor="projectType"
                    className="block text-sm font-semibold text-gray-700 w-16 mr-2"
                  >
                    Interested Area:
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    className="mt-1 ml-2 focus:ring-indigo-500 bg-gray-200 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 border-2 rounded-md"
                  >
                    <option value="Select">Select</option>
                    <option value="AI">Artificial Intelligence</option>
                    <option value="CyberSecurity">Cyber Security</option>
                    <option value="DataScience">Data Science & Big Data</option>
                    <option value="SoftwareEngineering">
                      Software Engineering
                    </option>
                    <option value="MobileWebDevelopment">
                      Mobile & Web Development
                    </option>
                    <option value="Blockchain">
                      Blockchain & Cryptocurrency
                    </option>
                    <option value="ComputerVision">Computer Vision</option>
                    <option value="IoT">Internet of Things</option>
                    <option value="DistributedComputing">
                      Distributed Computing
                    </option>
                    <option value="BioInformatics">Bio Informatics</option>
                  </select>
                </div>

                <div className="mb-4 flex items-center">
                  <label
                    htmlFor="supervisor"
                    className="block text-sm font-semibold text-gray-700 mr-2 "
                  >
                    Project Type:
                  </label>
                  <select
                    id="supervisor"
                    name="supervisor"
                    className="mt-1 focus:ring-indigo-500 bg-gray-200 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 border-2 rounded-md"
                  >
                    <option value="Option 1">Select</option>
                    <option value="Option 2">Machine Learning</option>
                    <option value="Option 3">Networking</option>
                    <option value="Option 3">Web Development</option>
                    <option value="Option 3">Mobile App Development</option>
                    <option value="Option 3">Game Development</option>
                    <option value="Option 3">Human Computer Interection</option>
                    <option value="Option 3">Bio Informatics Projects</option>
                    <option value="Option 3">Embeded System Projects</option>
                    <option value="Option 3">Cloud Copmuting</option>
                    
                  </select>
                </div>
                <div className="mb-4 flex items-center">
                  <label
                    htmlFor="program"
                    className="block text-sm font-semibold text-gray-700 mr-4 "
                  >
                    Program:
                  </label>
                  <select
                    id="program"
                    name="program"
                    className="mt-1 focus:ring-indigo-500 -ml-3 bg-gray-200 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 border-2 rounded-md"
                  >
                    <option value="Option 1">select</option>
                    <option value="Option 2">Option 2</option>
                    <option value="Option 3">Option 3</option>
                  </select>
                </div>
                <div className="mb-4 flex items-center">
                  <label
                    htmlFor="groupMembers"
                    className="block text-sm font-semibold text-gray-700 w-42 "
                  >
                    Level of Studies:
                  </label>
                  <input
                    type="text"
                    id="groupMembers"
                    name="groupMembers"
                    placeholder="level of study"
                    autoComplete="groupMembers"
                    className="mt-1 -ml-3 focus:ring-indigo-500 bg-gray-200 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 border-2 rounded-md"
                  />
                </div>

                <div className="ml-72">
                  <button
                    type="button"
                    className="text-white bg-purple-800 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-purple-800 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                  >
                    Complete
                  </button>
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
