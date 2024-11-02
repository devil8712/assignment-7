// src/pages/InternshipDetail.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const InternshipDetail = () => {
    const { id } = useParams(); // Extract the internship ID from the URL
    const [internship, setInternship] = useState(null); // State to store internship data

    // Fetch internship data based on the ID
    useEffect(() => {
        const fetchInternship = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/internships/${id}`);
                setInternship(response.data); // Store the fetched internship data in state
            } catch (error) {
                console.error('Error fetching internship:', error);
            }
        };
        fetchInternship();
    }, [id]); // Dependency array includes ID to refetch if it changes

    // Display a loading message while data is being fetched
    if (!internship) {
        return <div>Loading...</div>;
    }

    // Render the detailed view of the internship
    return (
        <div>
            <h1>{internship.title}</h1>
            <p><strong>Company:</strong> {internship.company}</p>
            <p><strong>Location:</strong> {internship.location}</p>
            <p><strong>Description:</strong> {internship.description}</p>
            <p><strong>Skills Required:</strong> {internship.skillsRequired.join(', ')}</p>
        </div>
    );
};

export default InternshipDetail;
