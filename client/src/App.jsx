import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Header from './components/Header';
import Hero from './components/Hero';
import JobList from './components/JobList';
import JobForm from './components/JobForm';
import Footer from './components/Footer';

const App = () => {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [filterCategory, setFilterCategory] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

 
  const fetchJobs = async () => {
    try {
      const res = await axios.get('http://localhost:5000/jobs');
      setJobs(res.data);
      setFilteredJobs(res.data);
    } catch (error) {
      console.error('Error fetching jobs:', error);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  
  const handlePostJob = async jobData => {
    try {
      await axios.post('http://localhost:5000/jobs', jobData);
      setShowForm(false);
      fetchJobs();
    } catch (error) {
      alert('Error posting job');
      console.error(error);
    }
  };

 
  useEffect(() => {
    let filtered = [...jobs];

    if (filterCategory) {
      filtered = filtered.filter(job => job.category === filterCategory);
    }

    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(
        job =>
          job.title.toLowerCase().includes(term) ||
          job.company.toLowerCase().includes(term)
      );
    }

    setFilteredJobs(filtered);
  }, [filterCategory, searchTerm, jobs]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header onPostJobClick={() => setShowForm(true)} />

      <Hero onSearch={setSearchTerm} />

      <section id="jobs" className="container mx-auto px-4 py-8 flex flex-col">
        <div className="mb-4 flex items-center space-x-4">
          <label htmlFor="category" className="font-semibold">
            Filter by Category:
          </label>
          <select
            id="category"
            value={filterCategory}
            onChange={e => setFilterCategory(e.target.value)}
            className="border rounded p-2"
          >
            <option value="">All</option>
            <option value="Design">Design</option>
            <option value="Development">Development</option>
            <option value="Marketing">Marketing</option>
            <option value="Sales">Sales</option>
            <option value="Finance">Finance</option>
          </select>
          {filterCategory && (
            <button
              onClick={() => setFilterCategory('')}
              className="ml-2 px-2 py-1 bg-gray-300 rounded hover:bg-gray-400"
            >
              Clear
            </button>
          )}
        </div>

        <JobList jobs={filteredJobs} />
      </section>

      <Footer />

      {showForm && (
        <JobForm
          onSubmit={handlePostJob}
          onClose={() => setShowForm(false)}
        />
      )}
    </div>
  );
};

export default App;
