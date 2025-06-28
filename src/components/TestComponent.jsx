import React from 'react';

function TestComponent() {
  return (
    <div className="p-8">
      <div className="bg-blue-500 text-white p-4 rounded-lg shadow-lg mb-4">
        This is a test component with Tailwind classes
      </div>
      <div className="bg-green-500 text-white p-4 rounded-lg shadow-lg">
        If you can see this with blue and green backgrounds, Tailwind is working!
      </div>
    </div>
  );
};

export default TestComponent;
