import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Admin imports (using your provided structure)
import Header from './admin/components/Header';
import Sidebar from './admin/components/Sidebar';
import AdminDashboard from './admin/pages/AdminDashboard';
import AdminUsers from './admin/pages/AdminUsers';
import AdminAssets from './admin/pages/AdminAssets';
import AdminRequests from './admin/pages/AdminRequests';
import AuditLogs from './admin/pages/AuditLogs';
import SystemConfig from './admin/pages/SystemConfig';
import Reports from './admin/pages/Reports';

// Employee and Manager imports
import EmployeeDashboard from './employees/components/EmployeeDashboard';
import Requests from './employees/components/Requests';
import RepairForm from './employees/components/RepairForm';
import Login from './employees/components/Login';
import Signup from './employees/components/Signup';
import Repairs from './employees/components/Repairs';
import RequestForm from './employees/components/RequestForm';
import ManagerDashboard from './manager/Dashboard/DashboardLayout'; 
import './App.css';

// Admin layout exactly as provided
const AdminLayout = () => (
  <div>
    <Header />
    <div className="container-fluid" style={{ paddingTop: '120px' }}>
      <div className="row">
        <div className="col-2 p-0">
          <Sidebar />
        </div>
        <div className="col-10">
          <Routes>
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route path="/admin/users" element={<AdminUsers />} />
            <Route path="/admin/assets" element={<AdminAssets />} />
            <Route path="/admin/requests" element={<AdminRequests />} />
            <Route path="/admin/audit-logs" element={<AuditLogs />} />
            <Route path="/admin/system-config" element={<SystemConfig />} />
            <Route path="/admin/reports" element={<Reports />} />
            <Route path="/" element={<Navigate to="/admin/dashboard" />} />
            <Route path="*" element={<p>404 - Page Not Found</p>} />
          </Routes>
        </div>
      </div>
    </div>
  </div>
);

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Authentication Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Employee Routes */}
        <Route path="/employee/dashboard" element={<EmployeeDashboard />} />
        <Route path="/requestform" element={<RequestForm />} />
        <Route path="/repairform" element={<RepairForm />} />
        <Route path="/requests" element={<Requests />} />
        <Route path="/repairs" element={<Repairs />} />

        {/* Manager Routes */}
        <Route path="/manager/dashboard" element={<ManagerDashboard />} />

        {/* Admin Routes */}
        <Route path="/admin/*" element={<AdminLayout />} />

        {/* Default Route */}
        <Route path="/" element={<Navigate to="/login" />} />

        {/* Fallback */}
        <Route path="*" element={<p>404 - Page Not Found</p>} />
      </Routes>
    </Router>
  );
};

export default App;
