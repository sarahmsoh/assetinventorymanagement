// src/components/api.js
import './api.css';
export const fetchRequests = async () => {
  return [
    { id: 1, description: "Software Installation", status: "Pending", date: "2025-02-20" },
    { id: 2, description: "Laptop Repair", status: "Completed", date: "2025-02-18" },
    { id: 3, description: "Network Setup", status: "In Progress", date: "2025-02-22" },
  ];
};

export const fetchRepairs = async () => {
  return [
    { id: 1, asset: "Laptop", status: "Completed", completionDate: "2025-02-18" },
    { id: 2, asset: "Projector", status: "In Progress", completionDate: "TBD" },
  ];
};

export const fetchAllocatedAssets = async () => {
  return [
    { id: 1, assetName: "Laptop", allocationDate: "2025-01-15", status: "Active" },
    { id: 2, assetName: "Monitor", allocationDate: "2025-02-01", status: "Active" },
  ];
};
