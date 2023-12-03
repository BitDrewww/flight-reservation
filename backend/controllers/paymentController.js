// paymentController.js
const db = require('../database/db');
const express = require('express');

reserveFlight = (req,res) => {
    const flightId = req.params.flightId;
    const seatId = req.params.seatId;
    const price = req.params.price;
    db.query('INSERT INTO Reservation(flight_id, seat_id, price) VALUES (?, ?, ?)', [flightId, seatId, price], (error, results) => {
        if (error) {
            console.log("error occured"+ error)
            res.status(500).send({
                message: `Error retrieving flight`,
                error: error.message
            });
        } else {
            res.status(200).send();
        }
    });
};

module.exports = {reserveFlight};