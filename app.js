const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/landing.html');
});

app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/views/about.html');
});

app.get('/contact', (req, res) => {
    res.sendFile(__dirname + '/views/contact.html');
});

app.post('/submit-form', (req, res) => {
    const { name, email, message } = req.body;
    console.log(`New Contact Form Submission:\nName: ${name}\nEmail: ${email}\nMessage: ${message}`);
    
    res.send(`<h2>Thank you, ${name}! Your message has been received.</h2>`);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
