import axios from 'axios';

const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:5000/api/notes'; // Use local or production API

export const fetchNotes = async () => {
    const response = await axios.get(apiUrl);
    return response.data;
};

export const createNote = async (note) => {
    const response = await axios.post(apiUrl, note);
    return response.data;
};
