import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-light py-2">
      <div className="container-fluid text-center">
        <ul className="list-inline mb-0">
          <li className="list-inline-item mx-2">
            <NavLink className="text-decoration-none" activeClassName="fw-bold" to="/admin/dashboard">Dashboard</NavLink>
          </li>
          <li className="list-inline-item mx-2">
            <NavLink className="text-decoration-none" activeClassName="fw-bold" to="/admin/users">Users</NavLink>
          </li>
          <li className="list-inline-item mx-2">
            <NavLink className="text-decoration-none" activeClassName="fw-bold" to="/admin/assets">Assets</NavLink>
          </li>
          <li className="list-inline-item mx-2">
            <NavLink className="text-decoration-none" activeClassName="fw-bold" to="/admin/requests">Requests</NavLink>
          </li>
          <li className="list-inline-item mx-2">
            <NavLink className="text-decoration-none" activeClassName="fw-bold" to="/admin/audit-logs">Audit Logs</NavLink>
          </li>
          <li className="list-inline-item mx-2">
            <NavLink className="text-decoration-none" activeClassName="fw-bold" to="/admin/system-config">System Config</NavLink>
          </li>
          <li className="list-inline-item mx-2">
            <NavLink className="text-decoration-none" activeClassName="fw-bold" to="/admin/reports">Reports</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;