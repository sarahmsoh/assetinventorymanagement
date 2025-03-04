import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Requests = () => {
  const [requests, setRequests] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('/api/requests')
      .then((response) => {
        setRequests(response.data);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="api-container">
      <h1>Your Requests</h1>
      <div className="api-list">
        {requests.length === 0 ? (
          <p>No requests available.</p>
        ) : (
          requests.map((request) => (
            <div className="api-item" key={request.id}>
              <p><strong>Description:</strong> {request.description}</p>
              <p><strong>Status:</strong> <span className="status">{request.status}</span></p>
              <p className="date"><strong>Date:</strong> {request.date}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Requests;
