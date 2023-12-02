// BrowseFlights.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const BrowseFlights = () => {
  const [flights, setFlights] = useState([]);
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [date, setDate] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const navigate = useNavigate();

  const handleSearch = () => {
    axios.get('https://jsonplaceholder.typicode.com/posts?_limit=5')
      .then(response => {
        setSearchResults(response.data);
        setShowResults(true);
      })
      .catch(error => console.error(error));
  };

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10')
      .then(response => setFlights(response.data))
      .catch(error => console.error(error));
  }, []);

  const handleSelect = (flight) => {
    // Customize this function based on your requirements
    console.log(`Flight selected: ${flight.id} - ${flight.title}`);
    // Navigate to the payment route with the selected flight ID
    navigate(`/seat-selection/${flight.id}`);
    // navigate(`/payment/${flight.id}`);
  };

  return (
    <div>
      <h2 style={{ textAlign: 'left' }}>Browse Flights</h2>
      <form onSubmit={handleSearch} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <label htmlFor="from">From:</label>
        <input
          type="text"
          id="from"
          name="from"
          value={from}
          onChange={(e) => setFrom(e.target.value)}
          style={{ marginBottom: '10px' }} // Added margin at the bottom
        />
        <label htmlFor="to">To:</label>
        <input
          type="text"
          id="to"
          name="to"
          value={to}
          onChange={(e) => setTo(e.target.value)}
          style={{ marginBottom: '10px' }} // Added margin at the bottom
        />
        <label htmlFor="date">Date:</label>
        <input
          type="date"
          id="date"
          name="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          style={{ marginBottom: '10px' }} // Added margin at the bottom
        />
        <button type="submit" style={{ marginTop: '10px', marginBottom: '20px' }}>Search Flights</button> {/* Added margin at the top and bottom */}
      </form>

      {showResults && (
        <div>
          <h3>Search Results</h3>
          <ul>
            {searchResults.length > 0 ? (
              searchResults.map(flight => (
                <li key={flight.id}>
                  {flight.title}
                  <button onClick={() => handleSelect(flight)} style={{ marginLeft: '10px' }}>Select</button>
                </li>
              ))
            ) : (
              <p>No flights match the search criteria.</p>
            )}
          </ul>
        </div>
      )}

      {!showResults && (
        <div>
          <h3>Flight Results</h3>
          <ul>
            {flights.map(flight => (
              <li key={flight.id}>
                {"Sample Flight"}
                <button onClick={() => handleSelect(flight)} style={{ marginLeft: '10px' }}>Select</button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default BrowseFlights;
