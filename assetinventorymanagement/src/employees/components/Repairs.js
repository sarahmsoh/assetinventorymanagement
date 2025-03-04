import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Repairs = () => {
  const [repairs, setRepairs] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/repairs');
        setRepairs(response.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

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
