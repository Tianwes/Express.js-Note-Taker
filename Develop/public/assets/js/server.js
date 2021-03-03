const http = require('http');
const fs = require('fs');
const path = require('path');
const express = require('express');
// const js = require('./index')

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// in order to have css display
app.use(express.static('../css'))

// GET method route
// works 
app.get('/', (req, res) => res.sendFile(path.join(__dirname, '../../index.html/')));

app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, '../../notes.html')));

// POST method - USER SENDS DATA TO US THAT THEY WANT TO SAVE
// (THEIR NOTES)
// app.post('/', function (req, res) {
//   res.send('POST request to the homepage')
// })

// MAYBE USE THIS FOR DELETING 
// app.post('/api/clear', (req, res) => {
//     // Empty out the arrays of data
//     tableData.length = 0;
//     waitListData.length = 0;

//     res.json({ ok: true });
//   });
// };

// Create our server
app.listen(PORT, () => console.log(`App listening on: http://localhost:${PORT}`))
