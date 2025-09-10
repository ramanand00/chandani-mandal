import React from 'react';

const Home = () => {
  const username = localStorage.getItem('username');

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Welcome, {username}!</h1>
      <p className="text-gray-700">You are now logged in and can use the website.</p>
    </div>
  );
};

export default Home;
