import React from 'react';
import { Link } from 'react-router-dom';
import SupervisorSidebar from './SupervisorSidebar';

const Meeting = () => {
  return (
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

        <div className='bg-purple-300 h-10 w-5/3 mt-3 rounded-lg'>
          <span className='ml-4 font-bold'>Meeting Creation Form</span>
        </div>

        <div className='grid grid-cols-3 gap-4 p-4'>
          <div className='text-sm bg-gray-200 p-4 rounded' style={{ marginTop: '3px' }}>
            Group Meeting 1
            <br />
            Time: 10am
            <br />
            Location: FYP lab
            <br />
            Due date: 10/5/24
          </div>
          <div className='text-sm bg-gray-200 p-4 rounded' style={{ marginTop: '3px' }}>
            Group Meeting 2
            <br />
            Time: 2pm
            <br />
            Location: Conference room
            <br />
            Due date: 12/5/24
          </div>
          <div className='text-sm bg-gray-200 p-4 rounded' style={{ marginTop: '3px' }}>
            Group Meeting 3
            <br />
            Time: 3pm
            <br />
            Location: Seminar hall
            <br />
            Due date: 14/5/24
          </div>
          <div className='text-sm bg-gray-200 p-4 rounded' style={{ marginTop: '3px' }}>
            Group Meeting 4
            <br />
            Time: 9am
            <br />
            Location: Virtual
            <br />
            Due date: 16/5/24
          </div>
          <div className='text-sm bg-gray-200 p-4 rounded' style={{ marginTop: '3px' }}>
            Group Meeting 5
            <br />
            Time: 11am
            <br />
            Location: Office
            <br />
            Due date: 18/5/24
          </div>
          <div className='text-sm bg-gray-200 p-4 rounded' style={{ marginTop: '3px' }}>
            Group Meeting 6
            <br />
            Time: 1pm
            <br />
            Location: Cafe
            <br />
            Due date: 20/5/24
          </div>
        </div>
      </div>
    </div>
  );
}

export default Meeting;
