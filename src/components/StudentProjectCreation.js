import React from 'react'
import { Link } from 'react-router-dom'
import Sidebar from './Sidebar'
import StudentSidebar from './StudentSideBar'

const StudentProjectCreation = () => {
    return (
        <div>
            <div>
                <StudentSidebar/>
            </div>

            <div className='container flex ml-72 mr-12 items-center justify-center w-auto h-16 bg-gray-100 mt-16 '>
<span className='font-bold'>Department Name: 

</span>

<span>Computer Science and IT</span>

</div>
            <div className=' w-[930px] ml-72 mt-5 h-96 mb-36 rounded-lg bg-gray-100 '>
                <span className='font-semibold ml-5'>Student Portal</span>
                {/* <div className='submenue rounded-full ml-6  mt-2 border-blue-300 border-2 h-12 w-96'>
                    <ul className='flex'>
                        <li className='flex-1 ml-8 mt-2'>My Profile</li>
                        <li className='flex-1 mt-2 cursor-pointer '>Create Project</li>
                        <Link to='/Tasks' className='flex-1 mt-2  '>Tasks</Link>
                    </ul>
                </div> */}

                <div className='bg-purple-300 h-10 w-5/3  mt-3 rounded-lg'>
                    <span className='ml-4 font-bold'>Project Creation Form</span>


                </div>

                <div className="flex">
                    <form className="bg-white shadow-md rounded-lg p-6 w-full  ">
                        <div className="grid grid-cols-2 gap-6 w-5/6">
                            {/* Left Side */}
                            <div className="col-span-1">
                                <div className="mb-4 flex items-center">
                                    <label htmlFor="projectTitle" className="block text-sm font-semibold text-gray-700   ">Project Title:</label>
                                    <input type="text" id="projectTitle" placeholder='Enter Project Title' name="projectTitle" className="mt-1 focus:ring-indigo-500 bg-gray-200 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 border-2 rounded-md" />
                                </div>
                                <div className="mb-4 flex items-center">
                                    <label htmlFor="description" className="block text-sm font-semibold text-gray-700 -ml-2 ">Description:</label>
                                    <textarea id="description" name="description" rows="4" placeholder='Write a breif Description' className="mt-1 focus:ring-indigo-500  bg-gray-200 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 border-2 rounded-md"></textarea>
                                </div>
                                <div className="mb-4 flex items-center">
                                    <label htmlFor="proposal" className="block text-sm font-semibold text-gray-700 mr-2 ">Proposal:</label>
                                    <input type="text" id="proposal" name="proposal" placeholder='No files Uploaded' className="focus:ring-indigo-500 bg-gray-200 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 border-2 rounded-md" />
                                </div>
                            </div>

                            {/* Right Side */}
                            <div className="col-span-1">
                                <div className="mb-4 flex items-center">
                                    <label htmlFor="projectType" className="block text-sm font-semibold text-gray-700 mr-2 ">Project Type:</label>
                                    <select id="projectType" name="projectType" className="mt-1 focus:ring-indigo-500 bg-gray-200 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 border-2 rounded-md">
                                        <option value="Web">Select</option>
                                        <option value="AI">AI</option>
                                        <option value="Flutter">Flutter</option>
                                    </select>
                                </div>
                                <div className="mb-4 flex items-center">
                                    <label htmlFor="supervisor" className="block text-sm font-semibold text-gray-700 mr-2 ">Supervisor:</label>
                                    <select id="supervisor" name="supervisor" className="mt-1 focus:ring-indigo-500 bg-gray-200 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 border-2 rounded-md">
                                        <option value="Option 1">Select</option>
                                        <option value="Option 2">Option 2</option>
                                        <option value="Option 3">Option 3</option>
                                    </select>
                                </div>
                                <div className="mb-4 flex items-center">
                                    <label htmlFor="program" className="block text-sm font-semibold text-gray-700 mr-4 ">Program:</label>
                                    <select id="program" name="program" className="mt-1 focus:ring-indigo-500 bg-gray-200 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 border-2 rounded-md">
                                        <option value="Option 1">select</option>
                                        <option value="Option 2">Option 2</option>
                                        <option value="Option 3">Option 3</option>
                                    </select>
                                </div>
                                <div className="mb-4 flex items-center">
                                    <label htmlFor="groupMembers" className="block text-sm font-semibold text-gray-700  ">Group Members:</label>
                                    <input type="text" id="groupMembers" name="groupMembers" placeholder='Enter Group Members IDs' autoComplete="groupMembers" className="mt-1 -ml-3 focus:ring-indigo-500 bg-gray-200 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 border-2 rounded-md" />
                                </div>

                                <div className='ml-72'>
                                    <button type="button" className="text-white bg-purple-800 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-purple-800 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">APPLY</button>

                                </div>
                            </div>
                        </div>
                    </form>
                </div>



            </div>
        </div>
    )
}

export default StudentProjectCreation