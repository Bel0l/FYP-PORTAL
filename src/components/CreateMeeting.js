import React from 'react';

const CreateMeeting = () => {
  return (
    <div>
      <div className='bg-purple-300 h-10 w-5/3 mt-3  rounded-lg'>
        <span className='ml-4 font-bold'>Task Creation Form</span>
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
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateMeeting;