import React from 'react';

const FailureAlert = ({ message }) => {
  return (
    <div className="alert alert-failure">
      <span>{message}</span>
    </div>
  );
};

export default FailureAlert;
