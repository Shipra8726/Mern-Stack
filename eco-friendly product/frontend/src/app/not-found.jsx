import React from 'react';

const NotFound = () => {
  return (
    <div className="min-h-screen  flex flex-col justify-center items-center">
      {/* Image */}
      <img 
        src="https://i.pinimg.com/564x/9a/33/19/9a33195f6ca8bea7fd7e6196527f5862.jpg" 
        alt="Not Found" 
        className="w-80 h-80 object-cover mb-6"
      />
      
      {/* 404 Text */}
      <h1 className="text-7xl font-bold text-red-600">404</h1>
      
      {/* Message */}
      <p className="text-2xl text-gray-700 mt-4">Oops! Page Not Found</p>
      <p className="text-gray-500 mt-2">The page you are looking for does not exist.</p>
      
      {/* Go Back Button */}
      <button 
        
        className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
        Go Back Home
      </button>
    </div>
  );
}

export default NotFound;
