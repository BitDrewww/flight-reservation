import React, { useState } from 'react';
import axios from 'axios';

export const NewFlightForm = ({afterSubmit}) => {
    const [departure, setDeparture] = useState('');
    const [arrival, setArrival] = useState('');
    const [flightDt, setFlightDt] = useState('');
    const [price, setPrice] = useState(0);

    const onSubmit = async (e) => {
        e.preventDefault();
        const res = await axios.post('http://localhost:3001/api/flights/', {
            departure,
            arrival,
            flightDt,
            price,
        });
        setDeparture('');
        setArrival('');
        setFlightDt('');
        setPrice(0);
        await afterSubmit();
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', maxWidth: '300px', marginTop: '20px'}}>
            <label htmlFor="departure">Departure airport</label>
            <input
            type="text"
            id="departure"
            name="departure"
            value={departure}
            onChange={(e) => setDeparture(e.target.value)}
            style={{ marginBottom: '10px' }}
            />
            <label htmlFor="arrival">Arrival airport</label>
            <input
            type="text"
            id="arrival"
            name="arrival"
            value={arrival}
            onChange={(e) => setArrival(e.target.value)}
            style={{ marginBottom: '10px' }}
            />
            <label htmlFor="date">Date</label>
            <input
            type="datetime-local"
            id="date"
            name="date"
            value={flightDt}
            onChange={(e) => setFlightDt(e.target.value)}
            style={{ marginBottom: '10px' }}
            />
            <label htmlFor="price">Price</label>
            <input
            type="number"
            id="price"
            name="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            style={{ marginBottom: '10px' }}
            />
            <button onClick={onSubmit}>Submit</button>
        </div>
    )
}