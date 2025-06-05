import React, { useState } from 'react';

const Hero = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <section id="home" className="bg-gray-100 py-16 text-center px-4">
      <h1 className="text-4xl font-bold mb-4">Find Your Dream Job.</h1>
      <p className="mb-6 text-lg text-gray-700">
        Search jobs by title or company name
      </p>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto flex">
        <input
          type="text"
          placeholder="Job title or company"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          className="flex-grow p-2 border border-gray-300 rounded-l"
        />
        <button type="submit" className="bg-blue-600 text-white px-4 rounded-r">
          Search
        </button>
      </form>
    </section>
  );
};

export default Hero;
