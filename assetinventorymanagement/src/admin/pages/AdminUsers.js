import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Table, Button, Form } from 'react-bootstrap';
import UserForm from '../components/UserForm';

const AdminUsers = () => {
  const users = useSelector(state => state.users.items || []);
  const assets = useSelector(state => state.assets.items || []);
  const requests = useSelector(state => state.requests.items || []);
  const [selectedUser, setSelectedUser] = useState(null);

  const handleViewDetails = (user) => {
    setSelectedUser(user);
  };

  return (
    <div className="container my-4">
      <h1>Manage Users</h1>
      <p>Onboard new employees, assign roles, and manage permissions.</p>
      <UserForm />
      <h3 className="mt-4">User List</h3>
      <Table striped hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Name</th>
            <th>Role</th>
            <th>Department</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.username}</td>
              <td>{user.name}</td>
              <td>{user.role}</td>
              <td>{user.department}</td>
              <td>
                <Button variant="outline-info" size="sm" onClick={() => handleViewDetails(user)}>View Details</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {selectedUser && (
        <div className="mt-4">
          <h4>User Details: {selectedUser.name}</h4>
          <p><strong>Role:</strong> {selectedUser.role}</p>
          <p><strong>Assigned Assets:</strong> {assets.filter(a => a.assignedTo === selectedUser.id).length}</p>
          <p><strong>Request History:</strong> {requests.filter(r => r.userId === selectedUser.id).length} requests</p>
          {/* Placeholder for role editing/reset password */}
        </div>
      )}
    </div>
  );
};

export default AdminUsers;