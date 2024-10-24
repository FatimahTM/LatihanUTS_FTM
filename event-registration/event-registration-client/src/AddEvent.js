import React, { useState } from 'react';
import axios from 'axios';

const AddEvent = () => {
    const [eventData, setEventData] = useState({
        participant_name: '',
        event_name: '',
        event_date: '',
        registration_number: '',
        category: ''
    });

    const handleChange = (e) => {
        setEventData({ ...eventData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/api/events', eventData);
            alert('Event added successfully!');
        } catch (error) {
            alert('Failed to add event.');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="container">
            <h2>Add Event</h2>
            <div className="form-group">
                <input type="text" name="participant_name" placeholder="Participant Name" onChange={handleChange} className="form-control" required />
                <input type="text" name="event_name" placeholder="Event Name" onChange={handleChange} className="form-control" required />
                <input type="date" name="event_date" onChange={handleChange} className="form-control" required />
                <input type="text" name="registration_number" placeholder="Registration Number" onChange={handleChange} className="form-control" required />
                <input type="text" name="category" placeholder="Category" onChange={handleChange} className="form-control" required />
                <button type="submit" className="btn btn-primary mt-2">Add Event</button>
            </div>
        </form>
    );
};

export default AddEvent;
