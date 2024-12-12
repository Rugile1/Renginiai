const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

// Sukuriame duomenų bazės prisijungimą
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',  // Pakeiskite savo MySQL vartotojo vardu
    password: '',  // Pakeiskite savo slaptažodžiu
    database: 'city_events' // Duomenų bazės pavadinimas
});

// Patikriname, ar prisijungimas buvo sėkmingas
db.connect((err) => {
    if (err) {
        console.error('error connecting to db', err);
    } else {
        console.log('connected to database');
    }
});

// Pagrindinis maršrutas
app.get('/', (req, res) => {
    res.send('City Events API');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
