import React from 'react'
import Sidebar from './Sidebar'

const AdminDashboard = () => {
  return (
    <div>
      <div className='sidebar'>
        <Sidebar/>
      </div>

      <div className='container flex ml-72 mr-12 items-center justify-center w-auto h-16 bg-gray-100 mt-16 '>
<span className='font-bold'>Department Name: 

</span>

<span>Computer Science and IT</span>

</div>

<div className='container w-auto h-[400px] bg-gray-100 mt-9 flex flex-wrap ml-72 mr-12 rounded-lg'>
  <div className='innercontainer w-80 h-20 bg-gray-100 border-gray-400 border-[1px] rounded-lg mt-11 ml-7'>
    <div className='flex mt-4 ml-3'>
      <span className='font-serif font-semibold text-blue-700'>Total Projects</span>
      <span className='font-serif font-semibold text-xl text-blue-700 ml-32'>20</span>
    </div>
  </div>
  
  <div className='innercontainer w-80 h-20 bg-gray-100 border-gray-400 border-[1px] rounded-lg mt-11 ml-7'>
    <div className='flex mt-4 ml-3'>
      <span className='font-serif font-semibold text-blue-700'>Total Supervisors</span>
      <span className='font-serif font-semibold text-xl text-blue-700 ml-32'>08</span>
    </div>
  </div>

  <div className='innercontainer w-80 h-20 bg-gray-100 border-gray-400 border-[1px] rounded-lg -mt-24 ml-7'>
    <div className='flex mt-4 ml-3'>
      <span className='font-serif font-semibold text-blue-700'>Total Students</span>
      <span className='font-serif font-semibold text-xl text-blue-700 ml-32'>55</span>
    </div>
  </div>
</div>






    </div>
  )
}

export default AdminDashboard
 