import React, { useEffect, useState } from 'react';
import axios from 'axios';

const EventList = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const fetchEvents = async () => {
            const response = await axios.get('/api/events');
            setEvents(response.data.data);
        };
        fetchEvents();
    }, []);

    return (
        <div className="container">
            <h2>Event List</h2>
            <ul className="list-group">
                {events.map(event => (
                    <li key={event.id} className="list-group-item">
                        {event.participant_name} - {event.event_name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default EventList;
