import React from 'react';
import ErrorBoundary from '../components/ErrorBoundary';
import ErrorProneComponent from '../components/ErrorProneComponent';

const HomePage = () => {
  return (
    <ErrorBoundary>
      <ErrorProneComponent />
    </ErrorBoundary>
  );
};

export default HomePage;