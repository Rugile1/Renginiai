// Simuliuojami vartotojai (administratorius ir paprastas vartotojas)
const users = [
    { username: 'admin', password: 'admin123', role: 'admin' },
    { username: 'user1', password: 'user123', role: 'user' },
    { username: 'user2', password: 'user234', role: 'user' }
];

let currentUser = null;

// Funkcija, rodanti registracijos formą
function showRegisterForm() {
    document.getElementById('loginForm').style.display = 'none'; // Paslėpti prisijungimo formą
    document.getElementById('registerForm').style.display = 'block'; // Rodyti registracijos formą
}

// Funkcija, rodanti prisijungimo formą
function showLoginForm() {
    document.getElementById('registerForm').style.display = 'none'; // Paslėpti registracijos formą
    document.getElementById('loginForm').style.display = 'block'; // Rodyti prisijungimo formą
}

// Funkcija registracijai
function register() {
    const username = document.getElementById('registerUsername').value;
    const password = document.getElementById('registerPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    
    // Paslėpti klaidos pranešimą
    document.getElementById('registerError').style.display = 'none';

    // Patikrinimas, ar slaptažodžiai sutampa
    if (password !== confirmPassword) {
        document.getElementById('registerError').style.display = 'block';
        document.getElementById('registerError').textContent = 'Slaptažodžiai nesutampa.';
        return;
    }

    // Patikrinimas, ar vartotojas jau egzistuoja
    const existingUser = users.find(u => u.username === username);
    if (existingUser) {
        document.getElementById('registerError').style.display = 'block';
        document.getElementById('registerError').textContent = 'Vartotojo vardas jau užimtas.';
        return;
    }

    // Sukuriame naują vartotoją
    const newUser = { username: username, password: password, role: 'user' };
    users.push(newUser);

    // Po registracijos rodome prisijungimo formą
    document.getElementById('registerForm').style.display = 'none';
    document.getElementById('loginForm').style.display = 'block';
    alert('Registracija sėkminga! Galite prisijungti.');
}

// Funkcija prisijungimui
function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        currentUser = user;
        document.getElementById('loginForm').style.display = 'none';
        document.getElementById('eventList').style.display = 'block';

        // Rodyti renginius
        displayEvents();
    } else {
        document.getElementById('loginError').style.display = 'block';
    }
}

// Funkcija rodyti renginius
function displayEvents() {
    const eventsList = document.getElementById('eventsList');
    eventsList.innerHTML = '';

    const events = [
        { id: 1, name: "Kalėdų Turgus", date: "2024-12-24", description: "Nuostabus Kalėdų turgus su šventine nuotaika.", image: "https://example.com/event1.jpg" },
        { id: 2, name: "Naujųjų Metų Sutikimas", date: "2024-12-31", description: "Nepamirštamas Naujųjų Metų sutikimas.", image: "https://example.com/event2.jpg" },
    ];

    events.forEach(event => {
        const li = document.createElement('li');
        li.innerHTML = `
            <h3>${event.name}</h3>
            <p><strong>Data:</strong> ${event.date}</p>
            <p><strong>Aprašymas:</strong> ${event.description}</p>
            <img src="${event.image}" alt="${event.name}" style="width: 100px; height: 100px;">
        `;
        eventsList.appendChild(li);
    });
}
