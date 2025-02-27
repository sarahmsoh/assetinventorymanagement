import React from 'react';

const SuccessAlert = ({ message }) => {
  return (
    <div className="alert alert-success">
      <span>{message}</span>
    </div>
  );
};

export default SuccessAlert;
