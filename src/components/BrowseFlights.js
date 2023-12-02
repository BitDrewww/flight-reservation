// BrowseFlights.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BrowseFlights = () => {
  const [flights, setFlights] = useState([]);
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [date, setDate] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const handleSearch = () => {
    // Fetch flights based on search criteria
    axios.get(`/api/flights?from=${from}&to=${to}&date=${date}`)
      .then(response => {
        setSearchResults(response.data);
        setShowResults(true);
      })
      .catch(error => console.error(error));
  };

  useEffect(() => {
    // Fetch all flights initially (or you can fetch based on default criteria)
    axios.get('/api/flights')
      .then(response => setFlights(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h2>Browse Flights</h2>
      <div>
        <label htmlFor="from">From:</label>
        <input
          type="text"
          id="from"
          value={from}
          onChange={(e) => setFrom(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="to">To:</label>
        <input
          type="text"
          id="to"
          value={to}
          onChange={(e) => setTo(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="date">Date:</label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <button onClick={handleSearch}>Search Flights</button>

      {showResults && (
        <div>
          <h3>Search Results</h3>
          <ul>
            {searchResults.length > 0 ? (
              searchResults.map(flight => (
                <li key={flight.id}>{flight.name} - {flight.departure} to {flight.destination}</li>
              ))
            ) : (
              <p>No flights match the search criteria.</p>
            )}
          </ul>
        </div>
      )}

      {!showResults && (
        <div>
          <h3>All Flights</h3>
          <ul>
            {flights.map(flight => (
              <li key={flight.id}>{flight.name} - {flight.departure} to {flight.destination}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default BrowseFlights;
