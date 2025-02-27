import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Table, Button, Form } from 'react-bootstrap';
import { updateRequest } from '../redux/requestsSlice';
// import { updateRequest } from '../../redux/requestsSlice';

const AdminRequests = () => {
  const dispatch = useDispatch();
  const requests = useSelector(state => state.requests.items || []);
  const users = useSelector(state => state.users.items || []);
  const assets = useSelector(state => state.assets.items || []);
  const [filterStatus, setFilterStatus] = useState('');

  const enhancedRequests = requests.map(request => ({
    ...request,
    userName: users.find(u => u.id === request.userId)?.name || 'Unknown',
    assetName: request.assetId ? assets.find(a => a.id === request.assetId)?.name : 'New Asset Request',
  }));

  const filteredRequests = filterStatus
    ? enhancedRequests.filter(r => r.status === filterStatus)
    : enhancedRequests;

  const handleAction = (requestId, status) => {
    dispatch(updateRequest({ id: requestId, status }));
  };

  return (
    <div className="container my-4">
      <h1>Manage Requests</h1>
      <p>View, prioritize, and manage asset requests and repair requests from users.</p>
      <Form.Select
        value={filterStatus}
        onChange={(e) => setFilterStatus(e.target.value)}
        className="mb-3"
      >
        <option value="">All Statuses</option>
        <option value="pending">Pending</option>
        <option value="approved">Approved</option>
        <option value="rejected">Rejected</option>
      </Form.Select>
      <Table striped hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>User</th>
            <th>Asset</th>
            <th>Type</th>
            <th>Urgency</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredRequests.map(request => (
            <tr key={request.id}>
              <td>{request.id}</td>
              <td>{request.userName}</td>
              <td>{request.assetName}</td>
              <td>{request.type}</td>
              <td>{request.urgency}</td>
              <td>{request.status}</td>
              <td>
                {request.status === 'pending' && (
                  <>
                    <Button variant="outline-success" size="sm" onClick={() => handleAction(request.id, 'approved')} className="me-2">Approve</Button>
                    <Button variant="outline-danger" size="sm" onClick={() => handleAction(request.id, 'rejected')} className="me-2">Reject</Button>
                    <Button variant="outline-info" size="sm" onClick={() => console.log(`Reassign ${request.id}`)}>Reassign</Button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default AdminRequests;