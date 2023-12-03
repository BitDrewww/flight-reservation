import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "./auth/AuthContext";
import axios from "axios";

import '../Styles.css';
import { NewFlightForm } from "./NewFlightForm";

export const AdminFlights = () => {
    const { user } = useContext(AuthContext);
    const [flights, setFlights] = useState([]);

    useEffect(() => {
        getFlights();
    }, []);

    const getFlights = async () => {
        if (!user || user.adminflag === 0) {
            return;
        }
        const res = await axios.get('http://localhost:3001/api/flights/');
        setFlights(res.data);
    }

    if (!user || user.adminflag === 0) {
        return (
            <div>
                <h1>Admin</h1>
                <p>You are not authorized to view this page.</p>
            </div>
        );
    }

    const onCancel = async (flightId) => {
        await axios.delete(`http://localhost:3001/api/flights/${flightId}`);
        await getFlights();
    }

    return (
        <div>
            <h1>Admin</h1>
            {flights.length === 0 ? (
                <p>No flights available.</p>
            ) : (
            <table style={{ border: '1px solid', borderCollapse: 'collapse' }}>
                <thead>
                    <tr>
                        <th>Flight ID</th>
                        <th>Departure Airport</th>
                        <th>Arrival Airport</th>
                        <th>Date</th>
                        <th>Price</th>
                        <th>Passengers</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {flights && flights.map((flight) => {
                        return (
                            <tr key={flight.id}>
                                <td>{flight.id}</td>
                                <td>{flight.departure}</td>
                                <td>{flight.arrival}</td>
                                <td>{new Date(flight.flightDt).toLocaleString()}</td>
                                <td>${flight.price}</td>
                                <td>
                                    {flight.reservations.length > 0 ? (
                                        <ul>
                                            {flight.reservations.map((reservation) => {
                                                return (
                                                    <li key={reservation.reservationId}>
                                                        {reservation.email ?? 'Guest'}
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    ) : (
                                        "None"
                                    )}
                                </td>
                                <td>
                                    <button onClick={() => onCancel(flight.id)}>Cancel</button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            )}
            <NewFlightForm afterSubmit={getFlights} />
        </div>
    );
}