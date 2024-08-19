// Create web server
const express = require('express');
const app = express();
const path = require('path');

// Set view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
    res.render('home');
});

app.get('/comments', (req, res) => {
    const { username, comment } = req.query;
    res.render('comments', { username, comment });
});

// Listen on port 3000
app.listen(3000, () => {
    console.log('Listening on port');
    });