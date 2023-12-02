import React, { useState } from 'react';
import FlightResults from './FlightResults';

function FlightSearch() {
  const [searchParams, setSearchParams] = useState({
    from: '',
    to: '',
    date: '',
  });

  const [searchResults, setSearchResults] = useState([]);
  const [selectedFlight, setSelectedFlight] = useState(null);

  const handleChange = (e) => {
    setSearchParams({ ...searchParams, [e.target.name]: e.target.value });
  };

  const handleFlightSelection = (flight) => {
    setSelectedFlight(flight);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Your API call logic here
    try {
      const response = await fetch('http://localhost:3001/api/flights/search', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(searchParams),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const flights = await response.json();
      setSearchResults(flights);
    } catch (error) {
      console.error('Error fetching flights:', error);
      setSearchResults([]);
    }
  };

  return (
    <div>
      <h2>Search Flights</h2>
      <form onSubmit={handleSubmit}>
        {/* Your form inputs here */}
        <label>
          From:
          <input
            type="text"
            name="from"
            value={searchParams.from}
            onChange={handleChange}
            placeholder="Departure City"
          />
        </label>
        <br />
        <label>
          To:
          <input
            type="text"
            name="to"
            value={searchParams.to}
            onChange={handleChange}
            placeholder="Arrival City"
          />
        </label>
        <br />
        <label>
          Date:
          <input
            type="date"
            name="date"
            value={searchParams.date}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Search</button>
      </form>

      {/* Display FlightResults with search results */}
      <FlightResults flights={searchResults} onSelectFlight={handleFlightSelection} />

      {/* Display selected flight details if a flight is selected */}
      {selectedFlight && (
        <div>
          <h3>Selected Flight:</h3>
          {/* Display details of the selected flight */}
        </div>
      )}
    </div>
  );
}

export default FlightSearch;
