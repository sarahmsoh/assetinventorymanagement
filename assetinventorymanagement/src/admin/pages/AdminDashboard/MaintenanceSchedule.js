// admin/src/pages/AdminDashboard/MaintenanceSchedule.js
import React from 'react';
import { Card } from 'react-bootstrap';

const MaintenanceSchedule = ({ assets }) => {
  const overdue = assets.filter(a => new Date(a.warrantyExpiry) < new Date());
  return (
    <Card className="mt-4">
      <Card.Body>
        <Card.Title>Maintenance Schedule</Card.Title>
        {overdue.length > 0 ? (
          <ul>
            {overdue.map(a => (
              <li key={a.id}>{a.name} - Warranty Expired: {a.warrantyExpiry}</li>
            ))}
          </ul>
        ) : (
          <p>No overdue maintenance tasks.</p>
        )}
      </Card.Body>
    </Card>
  );
};

export default MaintenanceSchedule;