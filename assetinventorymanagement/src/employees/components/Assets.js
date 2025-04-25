import React, { useState, useEffect } from 'react';
import { fetchAllocatedAssets } from './api';
import './EmployeeDashboard.css';

const Assets = () => {
  const [assets, setAssets] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const assetsData = await fetchAllocatedAssets();
      setAssets(assetsData);
    };

    fetchData();
  }, []);

  return (
    <div className="api-container">
      <h1>Allocated Assets</h1>
      <div className="api-list">
        {assets.length === 0 ? (
          <p>No assets allocated.</p>
        ) : (
          assets.map((asset) => (
            <div className="api-item" key={asset.id}>
              <p><strong>Asset Name:</strong> {asset.assetName}</p>
              <p><strong>Allocation Date:</strong> {asset.allocationDate}</p>
              <p><strong>Status:</strong> <span className="status">{asset.status}</span></p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Assets;
