const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const bodyParser = require('body-parser');

const app = express();
const port = 3001;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MySQL connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root', // default XAMPP user
    password: 'amtics@123', // default XAMPP password blank
    database: 'vehicle_service'
});

db.connect((err) => {
    if (err) {
        console.error('Database connection failed:', err);
    } else {
        console.log('Connected to MySQL database');
    }
});

// API endpoint to receive booking data
app.post('/api/bookings', (req, res) => {
    const booking = req.body;

    const sql = `INSERT INTO bookings 
        (name, email, phone, city, address, vehicleType, vehicleModel, vehicleNumber, serviceType, problem, date, time, pickupOption, garageId) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

    const values = [
        booking.name,
        booking.email,
        booking.phone,
        booking.city,
        booking.address,
        booking.vehicleType,
        booking.vehicleModel,
        booking.vehicleNumber,
        booking.serviceType,
        booking.problem,
        booking.date,
        booking.time,
        booking.pickupOption,
        booking.garageId
    ];

    db.query(sql, values, (err, result) => {
        if (err) {
            console.error('Error inserting booking:', err);
            res.status(500).send('Error saving booking');
        } else {
            res.status(200).send('Booking saved successfully');
        }
    });
});

// Start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});