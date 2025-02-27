// frontend/src/components/AssetForm.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addAsset } from '../redux/assetsSlice';

const AssetForm = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    department: '',
    urgency: 'Medium',
    image_url: '',
  });
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.category || !formData.department) {
      setError('Please fill in all required fields.');
      return;
    }
    try {
      await dispatch(addAsset(formData)).unwrap();
      setFormData({
        name: '',
        category: '',
        department: '',
        urgency: 'Medium',
        image_url: '',
      });
      setError(null);
    } catch (err) {
      setError('Failed to add asset. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-3">
      {error && <div className="alert alert-danger">{error}</div>}
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Asset Name</label>
        <input
          id="name"
          type="text"
          className="form-control"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          placeholder="Enter asset name"
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="category" className="form-label">Category</label>
        <select
          id="category"
          className="form-select"
          value={formData.category}
          onChange={(e) => setFormData({ ...formData, category: e.target.value })}
          required
        >
          <option value="">Select Category</option>
          <option value="IT Equipment">IT Equipment</option>
          <option value="Furniture">Furniture</option>
          <option value="Office Supplies">Office Supplies</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div className="mb-3">
        <label htmlFor="department" className="form-label">Department</label>
        <select
          id="department"
          className="form-select"
          value={formData.department}
          onChange={(e) => setFormData({ ...formData, department: e.target.value })}
          required
        >
          <option value="">Select Department</option>
          <option value="HR">HR</option>
          <option value="IT">IT</option>
          <option value="Finance">Finance</option>
          <option value="Procurement">Procurement</option>
          <option value="Operations">Operations</option>
        </select>
      </div>
      <div className="mb-3">
        <label htmlFor="urgency" className="form-label">Urgency Level</label>
        <select
          id="urgency"
          className="form-select"
          value={formData.urgency}
          onChange={(e) => setFormData({ ...formData, urgency: e.target.value })}
          required
        >
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      </div>
      <div className="mb-3">
        <label htmlFor="image_url" className="form-label">Image URL (optional)</label>
        <input
          id="image_url"
          type="text"
          className="form-control"
          value={formData.image_url}
          onChange={(e) => setFormData({ ...formData, image_url: e.target.value })}
          placeholder="Enter image URL"
        />
      </div>
      <button type="submit" className="btn btn-primary">Add Asset</button>
    </form>
  );
};

export default AssetForm;