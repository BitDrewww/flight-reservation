import React, { useState } from 'react';

function FlightSearch() {
  const [searchParams, setSearchParams] = useState({
    from: '',
    to: '',
    date: ''
  });

  const handleChange = (e) => {
    setSearchParams({ ...searchParams, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Searching for flights:', searchParams);

    try {
      // Update the URL to wherever your API is hosted, and the endpoint designed for searching flights
      const response = await fetch('http://localhost:3001/api/flights/search', {
        method: 'POST', // Assuming the backend expects a POST request for searching flights
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(searchParams), // Send the search parameters in the request body
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const flights = await response.json();
      // Do something with the flights data, e.g., set state, pass to another component, etc.
      console.log(flights);
    } catch (error) {
      console.error('Error fetching flights:', error);
    }
  };

  return (
    <div>
      <h2>Search Flights</h2>
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
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default FlightSearch;
