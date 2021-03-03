const http = require('http');
const fs = require('fs');
const path = require('path');
const express = require('express');
// const js = require('./index')

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// GET method route

// works 
app.get('/', (req, res) => res.sendFile(path.join(__dirname, '../../index.html')));

app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, '../../notes.html')));

// POST method route
app.post('/', function (req, res) {
  res.send('POST request to the homepage')
})

// Create our server
app.listen(PORT, () => console.log(`App listening on: http://localhost:${PORT}`))
