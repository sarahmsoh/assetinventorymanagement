import React from 'react';
import { useSelector } from 'react-redux';
import { Table, Button } from 'react-bootstrap';
import AssetForm from '../components/AssetForm';

const AdminAssets = () => {
  const assets = useSelector(state => state.assets.items || []);

  return (
    <div className="container my-4">
      <h1>Manage Assets</h1>
      <p>Add new assets, update existing assets, and assign assets to departments.</p>
      <AssetForm />
      <h3 className="mt-4">Asset List</h3>
      <Table striped hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Category</th>
            <th>Status</th>
            <th>Assigned To</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {assets.map(asset => (
            <tr key={asset.id}>
              <td>{asset.id}</td>
              <td>{asset.name}</td>
              <td>{asset.category}</td>
              <td>{asset.status}</td>
              <td>{asset.assignedTo || 'Unassigned'}</td>
              <td>
                <Button variant="outline-primary" size="sm" className="me-2">Edit</Button>
                <Button variant="outline-danger" size="sm">Decommission</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default AdminAssets;