import React, { useState } from 'react';

function FlightSearch() {
  const [searchParams, setSearchParams] = useState({
    from: '',
    to: '',
    date: ''
  });
  const [loading, setLoading] = useState(false);
  const [flights, setFlights] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setSearchParams({ ...searchParams, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

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

      const fetchedFlights = await response.json();
      setFlights(fetchedFlights);
      setError(null);
    } catch (error) {
      setFlights(null);
      setError(error.message || 'Error fetching flights');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Browse Flights</h2>
      <form onSubmit={handleSubmit}>
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
        <button type="submit" disabled={loading}>
          {loading ? 'Searching...' : 'Search'}
        </button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {flights && (
        <div>
          <h3>Search Results</h3>
          {/* Display your fetched flights here */}
          <pre>{JSON.stringify(flights, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default FlightSearch;
