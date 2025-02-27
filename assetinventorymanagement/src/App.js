import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from '../src/Home';
import Navbar from './employees/components/Navbar';
import Sidebar from './employees/components/Sidebar';
import EmployeeDashboard from './employees/components/EmployeeDashboard';
import Requests from './employees/components/Requests';
// import RequestAsset from './src/employees/components/RequestAsset';
import RepairForm from './employees/components/RepairForm';
import Login from './employees/components/Login';
import Signup from './employees/components/Signup';
import Repairs from './employees/components/Repairs';
import RequestForm from './employees/components/RequestForm';
import AdminDashboard from './admin/pages/AdminDashboard';
import AdminUsers from './admin/pages/AdminUsers';
import AdminAssets from './admin/pages/AdminAssets';
import AdminRequests from './admin/pages/AdminRequests';
import AuditLogs from './admin/pages/AuditLogs';
import SystemConfig from './admin/pages/SystemConfig';
import Reports from './admin/pages/Reports';
import dashboard from './manager/Dashboard/DashboardLayout';
import allocationLogic from './manager/DataLogic/allocationLogic';
import ApprovedRequestPage from './src/manager/RequestManagement/ApproveRequestModal';
import RejectedRequestPage from './src/manager/RequestManagement/RejectRequestModal';
import AllocationForm from './src/manager/AssetAllocation/AllocationForm';
import AssetManagement from './src/manager/AssetManagement/AssetManagent';
import AssertAllocationTable from './src/manager/AssetAllocation/AssetAllocationTable';
import PendingRequestsTable from './src/manager/RequestManagement/ApproveRequestModal';
import CompletedRequestTable from './src/manager/RequestManagement/CompletedRequestsTable';
import Header from './src/admin/components/Header';
import { useState } from 'react';


import './App.css';

const App = () => {
  const [LoggedIn, setLoggedIn] = useState(false);
  return (

    <Router>
       <Home />
       {/* <Navbar />
       <Sidebar /> */}

      <div className="main-content" style={{ marginLeft: '250px', padding: '20px' }}>
        <Routes>
          {/* Default Route */}
          <Route path="/" element={LoggedIn ? <EmployeeDashboard /> : <Navigate to="/login" />} />

          {/* Authentication */}
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={LoggedIn ? <Navigate to="/" /> : <Login setLoggedIn={setLoggedIn} />} />

          {/* Dashboards */}
          <Route path="/employee-dashboard" element={<EmployeeDashboard />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/manager/dashboard" element={<dashboard />} />
          {/* Forms */}
          <Route path="/requestform" element={<RequestForm />} />
          <Route path="/repairform" element={<RepairForm />} />

          {/* Pages */}
          <Route path="/requests" element={<Requests />} />
          <Route path="/repairs" element={<Repairs />} />
          {/* <Route path="/assets" element={<Assets />} /> */}

          {/* Admin Routes */}
          <Route path="/admin/users" element={<AdminUsers />} />
          <Route path="/admin/assets" element={<AdminAssets />} />
          <Route path="/admin/requests" element={<AdminRequests />} />
          <Route path="/admin/audit-logs" element={<AuditLogs />} />
          <Route path="/admin/system-config" element={<SystemConfig />} />
          <Route path="/admin/reports" element={<Reports />} />

          {/* 404 Route */}
          {/* <Route path="*" element={<p>404 - Page Not Found</p>} /> */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
