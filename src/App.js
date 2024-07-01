

import React from 'react';
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import Login from './components/Login';   
import WelcomeAdmin from './components/WelcomeAdmin';
import AdminDashboard from './components/AdminDashboard';
import AdminDashboard1 from './components/AdminDashboard1';
import AdminDashboardSupervisors from './components/AdminDashboardSupervisors';
import AdminDashboardProject from './components/AdminDashboardProject';
// import Projects from './components/Projects';
import StudentProjectCreation from './components/StudentProjectCreation';
import StudentProfile from './components/StudentProfile';
import StudentDashbaord from './components/StudentDashboard';
import StudentSidebar from './components/StudentSideBar';
import StudentProject from './components/StudentProject';
import SupervisorDashboard from './components/SupervisorDashboard';
import SupervisorEditProfile from './components/SupervisorEditProfile';
import SupervisorProfile from './components/SupervisorProfile';
import SupervisorProjectRequest from './components/SupervisorProjectRequest';
import SupervisorProjectsUnderMe from './components/SupervisorProjectsUnderMe';
import CreateMeeting from './components/CreateMeeting';
import CreateTask from './components/CreateTask';
import Meeting from './components/Meeting';
import Tasks from './components/Tasks';
import Chat from './components/Chat';
import SupervisorProReqDetails from './components/SupervisorProReqDetails';
import StudentTasks from './components/StudentTasks';
import StudentMeeting from './components/StudentMeeting';
import StudentChat from './components/StudentChat';



const App = () => {
  return (
    <Router>
      <Routes>
        {/*login page the landing page */}
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        
        <Route path='/WelcomeAdmin' element={<WelcomeAdmin/>}/>
      <Route path='/AdminDashboard' element={<AdminDashboard/>}/>
      <Route path='/AdminDashboard1' element={<AdminDashboard1/>}/>
      <Route path='/AdminDashboardProject' element={<AdminDashboardProject/>}/>
      <Route path='/AdminDashboardSupervisors' element={<AdminDashboardSupervisors/>}/>
      {/* <Route path='/Projects' element={<Projects/>}/> */}
      <Route path='/StudentProjectCreation' element={<StudentProjectCreation/>}/>
      <Route path='/StudentProfile' element={<StudentProfile/>}/>
      <Route path='/StudentDashboard' element={<StudentDashbaord/>}/>
      <Route path='/StudentSideBar' element={<StudentSidebar/>}/>
      <Route path='/StudentProject' element={<StudentProject/>}/>
      <Route path='/SupervisorDashboard' element={<SupervisorDashboard/>}/>
      <Route path='/SupervisorEditProfile' element={<SupervisorEditProfile/>}/>
      <Route path='/SupervisorProfile' element={<SupervisorProfile/>}/>
      <Route path='/SupervisorProjectRequest' element={<SupervisorProjectRequest/>}/>
      <Route path='/SupervisorProjectsUnderMe' element={<SupervisorProjectsUnderMe/>}/>
      <Route path='/CreateMeeting' element={<CreateMeeting/>}/>
      <Route path='/CreateTask' element={<CreateTask/>}/>
      <Route path='/Tasks' element={<Tasks/>}/>
      <Route path='/Meeting' element={<Meeting/>}/>
      <Route path='/Chat' element={<Chat/>}/>
      <Route path='/SupervisorProReqDetails' element={<SupervisorProReqDetails/>}/>
      <Route path='/StudentTasks' element={<StudentTasks/>}/>
      <Route path='/StudentMeeting' element={<StudentMeeting/>}/>
      <Route path='/StudentChat' element={<StudentChat/>}/>








      </Routes>


    </Router>
  );
};

export default App;
