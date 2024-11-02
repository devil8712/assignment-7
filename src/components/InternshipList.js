// src/components/InternshipList.js
import React from 'react';
import { Link } from 'react-router-dom';
import './InternshipList.css'; // Importing the CSS file for styling

const InternshipList = ({ internships }) => {
  return (
    <div className="internship-list">
      {internships.length === 0 ? (
        <p>No internships available matching your skills.</p>
      ) : (
        internships.map((internship) => (
          <div key={internship.id} className="internship-item">
            <h3>{internship.title}</h3>
            <p>{internship.description}</p>
            <Link to={`/internship/${internship.id}`} className="view-details">
              View Details
            </Link>
          </div>
        ))
      )}
    </div>
  );
};

export default InternshipList;
