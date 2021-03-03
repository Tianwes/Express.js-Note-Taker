const http = require('http');
const fs = require('fs');
const path = require('path');
const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// in order to have css display
app.use(express.static('../css'));
app.use(express.static(__dirname + "/public"));


// GET method route
// the -> * didn't work
app.get('/', (req, res) => res.sendFile(path.join(__dirname, '../../index.html/')));
app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, '../../notes.html/')));

// require("../../../routes/apiRoutes")(app);
require("../../../routes/htmlRoutes")(app);

// Create our server
app.listen(PORT, () => console.log(`App listening on: http://localhost:${PORT}`))

// MAYBE USE THIS FOR DELETING 
// app.post('/api/clear', (req, res) => {
//     // Empty out the arrays of data
//     tableData.length = 0;
//     waitListData.length = 0;

//     res.json({ ok: true });
//   });
// };
