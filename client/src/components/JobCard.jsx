import React from 'react';

const JobCard = ({ job }) => {
  return (
    <div className="border p-4 rounded shadow-sm hover:shadow-md transition">
      <h3 className="text-xl font-semibold">{job.title}</h3>
      <p className="text-gray-600">{job.company}</p>
      <p className="text-sm text-gray-500">
        {job.category} | {job.location}
      </p>
    </div>
  );
};

export default JobCard;
