// src/utils/api.js
export const fetchInternships = async () => {
    const response = await fetch('/api/internships'); // Adjust URL as needed
    const data = await response.json();
    return data;
};
