import React from 'react';
import './errorTemplate.css';

const ErrorTemplate = ({ message, children }) => {
  return (
    <div className="error-template">
      <div className="error-content">
        <h1>404 - Page introuvable</h1>
        <p>{message}</p>
        {children}
      </div>
    </div>
  );
}

export default ErrorTemplate;
