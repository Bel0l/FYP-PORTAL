

import React from 'react';
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import Login from './components/Login';   
import WelcomeAdmin from './components/WelcomeAdmin';
import AdminDashboard from './components/AdminDashboard';
import AdminDashboard1 from './components/AdminDashboard1';

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

      </Routes>


    </Router>
  );
};

export default App;
