import React from 'react';
import { Link } from 'react-router-dom';
import SupervisorSidebar from './SupervisorSidebar';

const CreateMeeting = () => {
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
        <span className='ml-4 font-bold'>Meeting Creation Form</span>
      </div>

      <div className="flex justify-center mt-4 mb-10">
        <form className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
          <div className="grid grid-cols-1 gap-y-6">
            <div>
              <label htmlFor="meetingType" className="block text-sm font-semibold text-gray-700 mb-1">Meeting Type:</label>
              <input type="text" id="meetingType" placeholder='Enter Meeting Type' name="meetingType" className="focus:ring-indigo-500 bg-gray-200 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 border-2 rounded-md py-1" />
            </div>

            <div>
              <label htmlFor="time" className="block text-sm font-semibold text-gray-700 mb-1">Time:</label>
              <textarea id="time" name="time" rows="1" placeholder='Enter Time' className="focus:ring-indigo-500 bg-gray-200 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 border-2 rounded-md py-1"></textarea>
            </div>

            <div>
              <label htmlFor="location" className="block text-sm font-semibold text-gray-700 mb-1">Location:</label>
              <input type="text" id="location" name="location" placeholder='Enter Location' className="focus:ring-indigo-500 bg-gray-200 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 border-2 rounded-md py-1" />
            </div>

            <div>
              <label htmlFor="date" className="block text-sm font-semibold text-gray-700 mb-1">Date:</label>
              <input type="text" id="date" name="date" placeholder='Enter Date' className="focus:ring-indigo-500 bg-gray-200 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 border-2 rounded-md py-1" />
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

export default CreateMeeting;