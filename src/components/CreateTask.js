import React from 'react';
import { Link } from 'react-router-dom';
import SupervisorSidebar from './SupervisorSidebar';

const CreateTask = () => {
  return (
    <div>
        
        <div>
      <div>
        <SupervisorSidebar />
      </div>

      <div className='container flex ml-72 mr-12 items-center justify-center w-auto h-16 bg-gray-100 mt-16 '>
        <span className='font-bold'>Department Name: </span>
        <span>Computer Science and IT</span>
      </div>

      <div className="w-[950px] ml-[285px] h-auto mt-5 mb-10 rounded-lg bg-gray-100">
        <span className="font-semibold ml-5">Supervisor Portal</span>
        <div className="submenue rounded-full w-3/4 ml-6 mt-2 border-blue-300 border-2 h-12">
          <ul className="flex">
            <Link to='/CreateMeeting'>
            <li className="flex-1 ml-8 mt-2 cursor-pointer">Create Meeting</li>
            </Link>
            <Link to='/CreateTask'>
              <li className="flex-1 mt-2 ml-5 cursor-pointer">Create Tasks</li>
            </Link>
            <Link to='/Meeting'>
              <li className="flex-1 mt-2 ml-8 cursor-pointer">Meeting</li>
            </Link>
            <Link to='/Tasks'>
            <li className="flex-1 mt-2 ml-8 cursor-pointer">Tasks</li>
            </Link>
            <Link to='/Chat' className="flex-1 mt-2 ml-8 cursor-pointer">Chat</Link>
          </ul>
        </div>
       
        <div className='bg-purple-300 h-10 w-5/3 mt-3  rounded-lg'>
        <span className='ml-4 font-bold'>Task Creation Form</span>
      </div>

      <div className="flex justify-center mt-4 mb-10">
        <form className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
          <div className="grid grid-cols-1 gap-y-6">
          <div>
              <label htmlFor="meetingType" className="block text-sm font-semibold text-gray-700 mb-1">Project Name:</label>
              <input type="text" id="meetingType" placeholder='Enter Project Name' name="projectName" className="focus:ring-indigo-500 bg-gray-200 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 border-2 rounded-md py-1" />
            </div>
            <div>
              <label htmlFor="meetingType" className="block text-sm font-semibold text-gray-700 mb-1">Title:</label>
              <input type="text" id="meetingType" placeholder='Enter Task Title' name="taskTitle" className="focus:ring-indigo-500 bg-gray-200 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 border-2 rounded-md py-1" />
            </div>

            <div>
              <label htmlFor="time" className="block text-sm font-semibold text-gray-700 mb-1">Assigned to:</label>
              <textarea id="time" name="time" rows="1" placeholder='Enter Name' className="focus:ring-indigo-500 bg-gray-200 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 border-2 rounded-md py-1"></textarea>
            </div>

            <div>
              <label htmlFor="location" className="block text-sm font-semibold text-gray-700 mb-1">Due date:</label>
              <input type="text" id="location" name="location" placeholder='Enter Date' className="focus:ring-indigo-500 bg-gray-200 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 border-2 rounded-md py-1" />
            </div>

            <div className="ml-72">
                  <Link to="">
                    <button
                      type="button"
                      className="text-white bg-purple-800 hover:bg-purple-600 focus:ring-4 focus:ring-purple-900 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 "
                    >
                      Done
                    </button>
                  </Link>
                </div>

           
          </div>
        </form>
      </div>
    </div>
        
      </div>
    </div>














    
  );
}

export default CreateTask;