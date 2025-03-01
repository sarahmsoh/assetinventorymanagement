import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from '../src/Home';
import EmployeeDashboard from './employees/components/EmployeeDashboard';
import Requests from './employees/components/Requests';
import RepairForm from './employees/components/RepairForm';
import Login from './employees/components/Login';
import Signup from './employees/components/Signup';
import Repairs from './employees/components/Repairs';
import Assets from './employees/components/Assets';
import RequestForm from './employees/components/RequestForm';
import AdminDashboard from './admin/pages/AdminDashboard';
import AdminUsers from './admin/pages/AdminUsers';
import AdminAssets from './admin/pages/AdminAssets';
import AdminRequests from './admin/pages/AdminRequests';
import AuditLogs from './admin/pages/AuditLogs';
import SystemConfig from './admin/pages/SystemConfig';
import Reports from './admin/pages/Reports';
import Dashboard from './manager/Dashboard/DashboardLayout';
import AllocationForm from './manager/AssetAllocation/AllocationForm';
import AssetManagement from './manager/AssetManagement/AssetManagent';
import AssertAllocationTable from './manager/AssetAllocation/AssetAllocationTable';
import PendingRequestsTable from './manager/RequestManagement/ApproveRequestModal';
import CompletedRequestTable from './manager/RequestManagement/CompletedRequestsTable';
import Header from './admin/components/Header';

import './App.css';


const App = () => {
  const [loggedIn, setLoggedIn] = useState(true);
  const [userRole, setUserRole] = useState(null);

  return (
    <Router>
      <Routes>
        {/* Default Home Page */}
        <Route path="/" element={<Home />} />

        {/* Authentication Routes */}
        <Route path="/signup" element={<Signup onSignup={() => <Navigate to="/login" />} />} />
        <Route
          path="/login"
          element={<Login setLoggedIn={setLoggedIn} setUserRole={setUserRole} />}
        />

        {/* Redirect users to their specific dashboard after login */}
        {loggedIn && userRole && (
          <Route path="/login" element={<Navigate to={`/${userRole}-dashboard`} />} />
        )}

        {/* Role-Based Dashboards */}
        <Route path="/employee-dashboard" element={loggedIn && userRole === "employee" ? <EmployeeDashboard /> : <Navigate to="/employee-dashboard" />} />
        <Route path="/admin-dashboard" element={loggedIn && userRole === "admin" ? <AdminDashboard /> : <Navigate to="/admin-dashboard" />} />
        <Route path="/manager/dashboard" element={loggedIn && userRole === "manager" ? <Dashboard /> : <Navigate to="/manager/dashboard" />} />

        {/* dashboards */}
        {/* <Route path="/employee-dashboard" element={<EmployeeDashboard />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/manager/dashboard" element={<Dashboard />} /> */}

        {/* Forms */}
        <Route path="/requestform" element={<RequestForm />} />
        <Route path="/repairform" element={<RepairForm />} />
        <Route path="/assetallocation" element={<AllocationForm />} />
        <Route path="/assetmanagement" element={<AssetManagement />} />
        <Route path="/pendingrequests" element={<PendingRequestsTable />} />
        <Route path="/completedrequests" element={<CompletedRequestTable />} />

        {/* Pages */}
        <Route path="/requests" element={<Requests />} />
        <Route path="/repairs" element={<Repairs />} />
        <Route path="/assets" element={<Assets />} />


        {/* Admin Routes */}
        <Route path="/admin/users" element={<AdminUsers />} />
        <Route path="/admin/assets" element={<AdminAssets />} />
        <Route path="/admin/requests" element={<AdminRequests />} />
        <Route path="/admin/audit-logs" element={<AuditLogs />} />
        <Route path="/admin/system-config" element={<SystemConfig />} />
        <Route path="/admin/reports" element={<Reports />} />

        {/* Redirect unknown routes to Home */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;
