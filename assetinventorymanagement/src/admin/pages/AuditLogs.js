import React, { useState } from 'react';
import { Table, Form } from 'react-bootstrap';

const AuditLogs = () => {
  const [search, setSearch] = useState('');
  const mockLogs = [
    { id: 1, timestamp: '2025-02-22 10:00', action: 'User X assigned Asset Y to Z' },
    { id: 2, timestamp: '2025-02-22 11:00', action: 'User A approved request #123' },
    { id: 3, timestamp: '2025-02-22 12:00', action: 'User B rejected request #456' },
  ];

  const filteredLogs = mockLogs.filter(log =>
    log.action.toLowerCase().includes(search.toLowerCase()) ||
    log.timestamp.includes(search)
  );

  return (
    <div className="container my-4">
      <h1>Audit Logs</h1>
      <p>Monitor user activities and system events for compliance and accountability.</p>
      <Form.Control
        type="text"
        placeholder="Search logs by action or timestamp"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mb-3"
      />
      <Table striped hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Timestamp</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredLogs.map(log => (
            <tr key={log.id}>
              <td>{log.id}</td>
              <td>{log.timestamp}</td>
              <td>{log.action}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default AuditLogs;