import React from 'react';
import EventList from './EventList';
import AddEvent from './AddEvent';

const App = () => {
    return (
        <div>
            <AddEvent />
            <EventList />
        </div>
    );
};

export default App;
