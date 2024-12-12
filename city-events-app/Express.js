const express = require('express');
const app = express();
const port = 5000;

// Paprastas renginių sąrašas
const events = [
    { name: 'Kalėdų Turgus', date: '2024-12-24', description: 'Nuostabus Kalėdų turgus su šventine nuotaika ir gardžiais kepiniais.' },
    { name: 'Naujųjų Metų Sutikimas', date: '2024-12-31', description: 'Nepamirštamas Naujųjų Metų sutikimas su fejerverkais ir muzika.' },
    { name: 'Žiemos Stebuklas', date: '2025-01-05', description: 'Patirkite žiemos stebuklą su čiuožimu ant ledo ir karšta kakava.' }
];

// API endpointas, kuris grąžina renginius
app.get('/events', (req, res) => {
    res.json(events);
});

app.listen(port, () => {
    console.log(`Serveris veikia ant http://localhost:${port}`);
});
// Funkcija prisijungimui
function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        currentUser = user;
        document.getElementById('loginForm').style.display = 'none';

        // Rodyti renginius
        document.getElementById('eventList').style.display = 'block';

        // Jeigu paprastas vartotojas, rodyti slaptažodžio keitimo formą
        if (user.role === 'user') {
            document.getElementById('userPanel').style.display = 'block';
        }

        // Jeigu administratorius, galima pridėti administratoriaus funkcionalumą
        if (user.role === 'admin') {
            // Admin funkcionalumas
            alert("Sveiki, administratoriau!");
        }

        // Parodyti atsijungimo mygtuką
        document.querySelector('.logout-btn').style.display = 'inline-block';

    } else {
        document.getElementById('loginError').style.display = 'block';
    }
}

// Funkcija atsijungimui
function logout() {
    currentUser = null;
    document.getElementById('loginForm').style.display = 'block';
    document.getElementById('eventList').style.display = 'none';
    document.getElementById('userPanel').style.display = 'none';
    document.querySelector('.logout-btn').style.display = 'none'; // Paslėpti atsijungimo mygtuką
}

