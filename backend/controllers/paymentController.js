// paymentController.js

const db = require('../database/db');
const express = require('express');

reserveFlight = (req,res) => {
    const {
        flightId,
        seatId,
        price,
        userEmail: email,
    } = req.body;

    db.query('INSERT INTO Reservation(flight_id, seat_id, price, email) VALUES (?, ?, ?, ?)', [flightId, seatId, price, email], (error, results) => {
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