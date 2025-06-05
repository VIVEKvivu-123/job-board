import React from 'react';
import JobCard from './JobCard';

const JobList = ({ jobs }) => {
  if (jobs.length === 0) {
    return <p className="text-center text-gray-500">No jobs found.</p>;
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
      {jobs.map(job => (
        <JobCard key={job._id} job={job} />
      ))}
    </div>
  );
};

export default JobList;
