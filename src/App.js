

import React from 'react';
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import Login from './components/Login';   
import WelcomeAdmin from './components/WelcomeAdmin';
import AdminDashboard from './components/AdminDashboard';
import AdminDashboard1 from './components/AdminDashboard1';
import AdminDashboardSupervisors from './components/AdminDashboardSupervisors';
import Projects from './components/Projects';
import StudentProjectCreation from './components/StudentProjectCreation';
import StudentProfile from './components/StudentProfile';
import StudentDashbaord from './components/StudentDashboard';
import StudentSidebar from './components/StudentSideBar';
import StudentProject from './components/StudentProject';
import SupervisorDashboard from './components/SupervisorDashboard';
import SupervisorProfile from './components/SupervisorProfile';

const App = () => {
  return (
    <Router>
      <Routes>
        {/*login page the landing page */}
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={
          <div>
            {/* <h2>Home</h2>
            <p>Welcome to the home page.</p> */}
          </div>
        } />
        <Route path='/WelcomeAdmin' element={<WelcomeAdmin/>}/>
      <Route path='/AdminDashboard' element={<AdminDashboard/>}/>
      <Route path='/AdminDashboard1' element={<AdminDashboard1/>}/>
      <Route path='/AdminDashboardSupervisors' element={<AdminDashboardSupervisors/>}/>
      <Route path='/Projects' element={<Projects/>}/>
      <Route path='/StudentProjectCreation' element={<StudentProjectCreation/>}/>
      <Route path='/StudentProfile' element={<StudentProfile/>}/>
      <Route path='/StudentDashboard' element={<StudentDashbaord/>}/>
      <Route path='/StudentSideBar' element={<StudentSidebar/>}/>
      <Route path='/StudentProject' element={<StudentProject/>}/>
      <Route path='/SupervisorDashboard' element={<SupervisorDashboard/>}/>
      <Route path='/SupervisorProfile' element={<SupervisorProfile/>}/>








      </Routes>


    </Router>
  );
};

export default App;
