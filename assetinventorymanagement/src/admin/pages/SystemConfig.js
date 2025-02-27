import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';

const SystemConfig = () => {
  const [categories, setCategories] = useState(['IT Equipment', 'Furniture', 'Office Supplies']);
  const [departments, setDepartments] = useState(['HR', 'IT', 'Finance', 'Procurement', 'Operations']);
  const [urgencyLevels, setUrgencyLevels] = useState(['Low', 'Medium', 'High']);
  const [newCategory, setNewCategory] = useState('');
  const [newDepartment, setNewDepartment] = useState('');
  const [newUrgency, setNewUrgency] = useState('');

  const handleAddCategory = (e) => {
    e.preventDefault();
    if (newCategory.trim()) {
      setCategories([...categories, newCategory.trim()]);
      setNewCategory('');
    }
  };

  const handleAddDepartment = (e) => {
    e.preventDefault();
    if (newDepartment.trim()) {
      setDepartments([...departments, newDepartment.trim()]);
      setNewDepartment('');
    }
  };

  const handleAddUrgency = (e) => {
    e.preventDefault();
    if (newUrgency.trim()) {
      setUrgencyLevels([...urgencyLevels, newUrgency.trim()]);
      setNewUrgency('');
    }
  };

  return (
    <div className="container my-4">
      <h1>System Configuration</h1>
      <p>Configure asset categories, departments, urgency levels, and other system settings.</p>

      {/* Asset Categories */}
      <Row className="mb-4">
        <Col>
          <h5>Asset Categories</h5>
          <ul>
            {categories.map((cat, index) => (
              <li key={index}>{cat}</li>
            ))}
          </ul>
          <Form onSubmit={handleAddCategory}>
            <Form.Group className="mb-2">
              <Form.Control
                type="text"
                value={newCategory}
                onChange={(e) => setNewCategory(e.target.value)}
                placeholder="Add new category"
              />
            </Form.Group>
            <Button type="submit" variant="primary">Add Category</Button>
          </Form>
        </Col>
      </Row>

      {/* Departments */}
      <Row className="mb-4">
        <Col>
          <h5>Departments</h5>
          <ul>
            {departments.map((dep, index) => (
              <li key={index}>{dep}</li>
            ))}
          </ul>
          <Form onSubmit={handleAddDepartment}>
            <Form.Group className="mb-2">
              <Form.Control
                type="text"
                value={newDepartment}
                onChange={(e) => setNewDepartment(e.target.value)}
                placeholder="Add new department"
              />
            </Form.Group>
            <Button type="submit" variant="primary">Add Department</Button>
          </Form>
        </Col>
      </Row>

      {/* Urgency Levels */}
      <Row className="mb-4">
        <Col>
          <h5>Urgency Levels</h5>
          <ul>
            {urgencyLevels.map((level, index) => (
              <li key={index}>{level}</li>
            ))}
          </ul>
          <Form onSubmit={handleAddUrgency}>
            <Form.Group className="mb-2">
              <Form.Control
                type="text"
                value={newUrgency}
                onChange={(e) => setNewUrgency(e.target.value)}
                placeholder="Add new urgency level"
              />
            </Form.Group>
            <Button type="submit" variant="primary">Add Urgency Level</Button>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default SystemConfig;