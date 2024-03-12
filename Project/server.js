const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = 3000;

// MySQL connection
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'shreyasrane', // Change this to your MySQL password
    database: 'mydatabase'
});

// Connect to MySQL
connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL database');
});
app.use((req, res, next) => {
    // Allow all origins for development (not recommended for production)
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });
// Middleware to parse request bodies
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'views','public')));
// Route to serve the registration page
// app.get('/', (req, res) => {
//     res.sendFile(__dirname + '/views/index.html');
// });

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'index.html'));
//   });
  app.get('/reg-form', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'main.html'));
});
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'AR_viyoge.html'));
});
app.get('/secrets', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'Chamber_of_secrets.html'));
});

app.get('/code', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'Code_Crunch.html'));
});
app.get('/digital', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'Digital_Disruption.html'));
});
app.get('/escape', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'Escape_room.html'));
});
app.get('/gaming', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'Gaming.html'));
});
app.get('/paper', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'Paper_trading.html'));
});
app.get('/relay', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'Relay_of_hindi.html'));
});
app.get('/scam', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'Scam_2.html'));
});
app.get('/trifecta', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'Trifecta.html'));
});


// Route to handle registration form submission
app.post('/register', (req, res) => {
    const username = req.body.username;
    const mobile = req.body.mobile;

    const player1 = req.body.player1;
    const player2 = req.body.player2;
    const player3 = req.body.player3;
    const player4 = req.body.player4;
  
    // Insert new user into MySQL database
    const sql = 'INSERT INTO users (username,player1,mobile,player2,player3,player4) VALUES (?, ?,?,?,?,?)';
    connection.query(sql, [username,player1,mobile,player2,player3,player4], (err, result) => {
        if (err) throw err;
        console.log('User registered');
        res.redirect('/'); // Redirect to registration page after registration
    });
});

// Start server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
