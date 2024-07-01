import React from 'react';
import { Link } from 'react-router-dom';
import StudentSideBar from './StudentSideBar';

const Tasks = () => {
  return (
    <div>
      <div>
        <StudentSideBar />
      </div>

      <div className='container flex ml-72 mr-12 items-center justify-center w-auto h-16 bg-gray-100 mt-16 '>
        <span className='font-bold'>Department Name: </span>
        <span>Computer Science and IT</span>
      </div>

      <div className="w-[950px] ml-[285px] h-auto mt-5 mb-10 rounded-lg bg-gray-100">
        <span className="font-semibold ml-5">Student Portal</span>
        <div className="submenue rounded-full w-3/4 ml-6 mt-2 border-blue-300 border-2 h-12">
          <ul className="flex">
            {/* <Link to='/CreateMeeting'>
            <li className="flex-1 ml-8 mt-2 cursor-pointer">Create Meeting</li>
            </Link> */}
            {/* <Link to='/CreateTask'>
              <li className="flex-1 mt-2 ml-5 cursor-pointer">Create Tasks</li>
            </Link> */}
            <Link to='/StudentTasks'>
            <li className="flex-1 mt-2 ml-8 cursor-pointer">Tasks</li>
            </Link>
            <Link to='/StudentMeeting'>
              <li className="flex-1 mt-2 ml-8 cursor-pointer">Meeting</li>
            </Link>
            
            <Link to='/StudentChat' className="flex-1 mt-2 ml-8 cursor-pointer">Chat</Link>
          </ul>
        </div>

        <div className='bg-purple-300 h-10 w-5/3 mt-3 rounded-lg'>
          <span className='ml-4 font-bold'>Tasks</span>
        </div>

        <div className='grid grid-cols-3 gap-4 p-4'>
          <div className='text-sm bg-gray-200 p-4 rounded' style={{ marginTop: '3px' }}>
            Task #1
            <br />
            Title: Requirements analysis
            <br />
            Assigned to: Aqib
            <br />
            Due date: 10/5/24
          </div>
          <div className='text-sm bg-gray-200 p-4 rounded' style={{ marginTop: '3px' }}>
            Task #2
            <br />
            Title: Another analysis
            <br />
            Assigned to: John
            <br />
            Due date: 12/5/24
          </div>
          <div className='text-sm bg-gray-200 p-4 rounded' style={{ marginTop: '3px' }}>
            Task #3
            <br />
            Title: Task Three
            <br />
            Assigned to: Sarah
            <br />
            Due date: 14/5/24
          </div>
          <div className='text-sm bg-gray-200 p-4 rounded' style={{ marginTop: '3px' }}>
            Task #4
            <br />
            Title: Fourth Task
            <br />
            Assigned to: Michael
            <br />
            Due date: 16/5/24
          </div>
          <div className='text-sm bg-gray-200 p-4 rounded' style={{ marginTop: '3px' }}>
            Task #5
            <br />
            Title: Task Five
            <br />
            Assigned to: Emily
            <br />
            Due date: 18/5/24
          </div>
          <div className='text-sm bg-gray-200 p-4 rounded' style={{ marginTop: '3px' }}>
            Task #6
            <br />
            Title: Sixth Task
            <br />
            Assigned to: Ryan
            <br />
            Due date: 20/5/24
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tasks;
