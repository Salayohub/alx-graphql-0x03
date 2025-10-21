import React from 'react';

const ErrorProneComponent = () => {
  throw new Error("This is a test error for Sentry!");
};

export default ErrorProneComponent;
