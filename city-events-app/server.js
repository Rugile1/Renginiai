const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");

const app = express();
const port = 5000;

// Middleware
app.use(bodyParser.json());

// Simuliuojama duomenų bazė
const users = [
    { username: "user1", passwordHash: bcrypt.hashSync("password123", 10) },
    { username: "user2", passwordHash: bcrypt.hashSync("secretpassword", 10) },
];

// Prisijungimo užklausa
app.post("/login", (req, res) => {
    const { username, password } = req.body;

    // Patikriname, ar vartotojas egzistuoja
    const user = users.find(u => u.username === username);
    if (!user) {
        return res.status(401).json({ success: false, message: "Vartotojas nerastas" });
    }

    // Patikriname slaptažodį
    const isMatch = bcrypt.compareSync(password, user.passwordHash);
    if (!isMatch) {
        return res.status(401).json({ success: false, message: "Neteisingas slaptažodis" });
    }

    // Sukuriame JWT žetoną
    const token = jwt.sign({ username: user.username }, "secretKey", { expiresIn: "1h" });

    res.json({ success: true, token });
});

// Pagrindinis puslapis (Dashboard)
app.get("/dashboard", (req, res) => {
    res.send("<h1>Pagrindinis puslapis - prisijungimas sėkmingas!</h1>");
});

app.listen(port, () => {
    console.log(`Serveris veikia ant http://localhost:${port}`);
});
