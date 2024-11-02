// src/pages/Internships.js
import React, { useEffect, useState } from 'react';
import './Internships.css'; // Importing the CSS file

const Internships = () => {
    const [internships, setInternships] = useState([]);
    const [filteredInternships, setFilteredInternships] = useState([]);
    const [filter, setFilter] = useState('');
    const [formData, setFormData] = useState({
        title: '',
        company: '',
        location: '',
        description: '',
        skillsRequired: ''
    });

    useEffect(() => {
        fetchInternships();
    }, []);

    useEffect(() => {
        filterInternships();
    }, [filter, internships]);

    const fetchInternships = async () => {
        const response = await fetch('http://localhost:5000/api/internships');
        const data = await response.json();
        setInternships(data);
        setFilteredInternships(data); // Initialize filtered internships with all internships
    };

    const filterInternships = () => {
        if (filter) {
            const lowerCaseFilter = filter.toLowerCase();
            const filtered = internships.filter(internship =>
                internship.skillsRequired.some(skill =>
                    skill.toLowerCase().includes(lowerCaseFilter)
                )
            );
            setFilteredInternships(filtered);
        } else {
            setFilteredInternships(internships);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { skillsRequired, ...rest } = formData;
        const newInternship = {
            ...rest,
            skillsRequired: skillsRequired.split(',').map(skill => skill.trim())
        };

        try {
            const response = await fetch('http://localhost:5000/api/internships', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newInternship),
            });

            if (response.ok) {
                const addedInternship = await response.json();
                setInternships([...internships, addedInternship]);
                setFilteredInternships([...filteredInternships, addedInternship]); // Update filtered list
                setFormData({
                    title: '',
                    company: '',
                    location: '',
                    description: '',
                    skillsRequired: ''
                });
            } else {
                console.error('Error adding internship');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleFilterChange = (e) => {
        setFilter(e.target.value);
    };

    return (
        <div className="internships-container">
            <h1>Internships</h1>

            <div className="filter-container">
                <input
                    type="text"
                    placeholder="Filter by skills..."
                    value={filter}
                    onChange={handleFilterChange}
                />
            </div>

            <form className="internship-form" onSubmit={handleSubmit}>
                <h2>Add New Internship</h2>
                <input
                    type="text"
                    name="title"
                    placeholder="Title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="company"
                    placeholder="Company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="location"
                    placeholder="Location"
                    value={formData.location}
                    onChange={handleChange}
                    required
                />
                <textarea
                    name="description"
                    placeholder="Description"
                    value={formData.description}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="skillsRequired"
                    placeholder="Skills Required (comma separated)"
                    value={formData.skillsRequired}
                    onChange={handleChange}
                    required
                />
                <button type="submit">Add Internship</button>
            </form>

            <h2>Available Internships</h2>
            <ul className="internship-list">
                {filteredInternships.map(internship => (
                    <li key={internship._id}>
                        <h3>{internship.title}</h3>
                        <p><strong>Company:</strong> {internship.company}</p>
                        <p><strong>Location:</strong> {internship.location}</p>
                        <p><strong>Description:</strong> {internship.description}</p>
                        <p><strong>Skills Required:</strong> {internship.skillsRequired.join(', ')}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Internships;
