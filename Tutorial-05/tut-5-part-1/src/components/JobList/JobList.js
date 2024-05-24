import React from 'react';

import './JobList.css';

const JobList = ({ jobs }) => {
    return (
        <ul className="job-list">
            {jobs.map((job) => (
                <li key={job.code}><strong>{job.name}</strong> : {job.scope}</li>
            ))}
        </ul>
    );
};

export default JobList;