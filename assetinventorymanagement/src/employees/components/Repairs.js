import React, { useState, useEffect } from 'react';
import { fetchRepairs } from './api';
import './api.css';

const Repairs = () => {
  const [repairs, setRepairs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const repairsData = await fetchRepairs();
      setRepairs(repairsData);
    };

    fetchData();
  }, []);

  return (
    <div className="api-container">
      <h1>Repairs</h1>
      <div className="api-list">
        {repairs.length === 0 ? (
          <p>No repair requests available.</p>
        ) : (
          repairs.map((repair) => (
            <div className="api-item" key={repair.id}>
              <p><strong>Asset:</strong> {repair.asset}</p>
              <p><strong>Status:</strong> <span className="status">{repair.status}</span></p>
              <p className="date"><strong>Completion Date:</strong> {repair.completionDate}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Repairs;
