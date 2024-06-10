import React from 'react';
import { Link } from 'react-router-dom';
import './costum.css';

const Meeting = () => {
  return (
    <div>
      <div className="w-5/6 ml-32 mt-8 h-auto mb-28 rounded-lg bg-gray-100">
        <span className="font-semibold ml-5">Supervisor Portal</span>
        <div className="submenue rounded-full w-3/4 ml-6 mt-2 border-blue-300 border-2 h-12">
          <ul className="flex">
            <li className="flex-1 ml-8 mt-2">My Profile</li>
            <li className="flex-1 mt-2 cursor-pointer">Project Requests</li>
            <Link to='/Projects' className="flex-1 mt-2 cursor-pointer">Projects Under Me</Link>
          </ul>
        </div>
        <div className='bg-purple-500 mt-2 w-full h-10'>
          Digital transform: An integrated E-Departmental MIS Phase II
        </div>
        <div>
        <Link to='/CreateTask' type="button" className="text-blue-900 ml-8 mt-2   bg-purple-500 font-bold rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-purple-400 dark:hover:bg-purple-400 focus:outline-none dark:focus:ring-blue-800">Create Task</Link>

          <Link to='/Tasks' type="button" className="text-blue-900 ml-8 mt-2 bg-purple-500 font-bold rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-purple-400 dark:hover:bg-purple-400 focus:outline-none dark:focus:ring-blue-800">Tasks</Link>
          <Link to='/Meetings' className="text-blue-900 mt-2 bg-purple-500 font-bold rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-purple-400 dark:hover:bg-purple-400 focus:outline-none dark:focus:ring-blue-800">Meetings</Link>
          <button type="button" className="text-blue-900 mt-2 bg-purple-500 font-bold rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-purple-400 dark:hover:bg-purple-400 focus:outline-none dark:focus:ring-blue-800">Chat</button>
        </div>

        <div className='relative w-5/6 ml-9 h-auto mb-9 bg-gray-300'>
          <div className='flex flex-wrap gap-4'>
            <div className='text-sm bg-gray-200 p-4 max-w-full' style={{ marginTop: '3px', marginLeft: '4px' }}>
              Group Meeting 1
              <br/>
              Time: 10am
              <br/>
              Location: FYP lab
              <br/>
              Due date: 10/5/24
            </div>
            <div className='text-sm bg-gray-200 p-4 max-w-full' style={{ marginTop: '3px', marginLeft: '4px' }}>
              Group Meeting 2
              <br/>
              Time: 2pm
              <br/>
              Location: Conference room
              <br/>
              Due date: 12/5/24
            </div>
            <div className='text-sm bg-gray-200 p-4 max-w-full' style={{ marginTop: '3px', marginLeft: '4px' }}>
              Group Meeting 3
              <br/>
              Time: 3pm
              <br/>
              Location: Seminar hall
              <br/>
              Due date: 14/5/24
            </div>
            <div className='text-sm bg-gray-200 p-4 max-w-full' style={{ marginTop: '3px', marginLeft: '4px' }}>
              Group Meeting 4
              <br/>
              Time: 9am
              <br/>
              Location: Virtual
              <br/>
              Due date: 16/5/24
            </div>
            <div className='text-sm bg-gray-200 p-4 max-w-full'>
              Group Meeting 5
              <br/>
              Time: 11am
              <br/>
              Location: Office
              <br/>
              Due date: 18/5/24
            </div>
            <div className='text-sm bg-gray-200 p-4 max-w-full'>
              Group Meeting 6
              <br/>
              Time: 1pm
              <br/>
              Location: Cafe
              <br/>
              Due date: 20/5/24
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Meeting;