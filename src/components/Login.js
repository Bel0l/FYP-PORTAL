import React from 'react';
import Logo from '../assets/logo.png'
const Login = () => {
  return (
    <div>
      
      <div className="w-80 h-full fixed  top-0 left-0   bg-[#6532A5]">
      {/* Assuming your logo image is stored in public/images/logo.png */}
      <img src={Logo} alt="Logo" className="w-auto h-auto my-36 opacity-65" />
    </div>



    <div className='flex justify-center item-center'>
    <div className="form flex justify-center item-center bg-slate-100 rounded-xl shadow-lg m-4 ml-52 p-8 md:mr-20 md:mt-12 md:w-auto">
        <form 
        // onSubmit={handleLogin} 
        className="flex flex-col ">
          <h2 className='text-3xl font-bold font-sans '>Welcome to FYP Portal</h2>
          <h4 className='text-gray-500 mt-2 '>Final Year Project Management System</h4>
          <p className='font-bold text-gray-700  font-sans text-sm mt-8'>Login your account</p>
          
          <div className="mt-2 space-y-2">
            <div>
            <label htmlFor="username" className="text-sm font-bold">Username:</label>
            <input
              // type="text"
              // id="username"
              // value={username}
              // onChange={(e) => setUsername(e.target.value)}
              placeholder="Username..."
              className="ring-1 ring-gray-300 w-full rounded-md px-2 py-1 mt-1 mb-2 outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div>
            <label htmlFor="password" className="text-sm font-bold">Password:</label>
            <input
              // type="password"
              // id="password"
              // value={password}
              // onChange={(e) => setPassword(e.target.value)}
              placeholder="Password..."
              className="ring-1 ring-gray-300 w-full rounded-md px-2 py-1 mt-1 mb-2 outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div>
  <label htmlFor="SelectRole" className="text-sm font-bold">
    Select Role:
  </label>
  <select
    id="SelectRole"
    className="ring-1 ring-gray-300 w-full rounded-md px-2 py-1 mt-1 mb-2 outline-none focus:ring-2 focus:ring-purple-500"
  >
    <option value="" disabled selected>Select a role</option>
    <option value="admin">Admin</option>
    <option value="user">Supervisor</option>
    <option value="manager">Student</option>
  </select>
</div>
          <button
            type="submit"
            className="bg-[#6532A5] text-white p-2 px-3 rounded-md font-semibold"
          >
            Login
          </button>
          </div>
        </form>
      </div>

      </div>
      </div>
      
      
  );
};

export default Login;