// const http = require('http');
const fs = require('fs');
const path = require('path');
const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));


// GET - method route
// the -> * didn't work
app.get('/', (req, res) => res.sendFile(path.join(__dirname, './public/index.html/')));
app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, './public/notes.html/')));

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

app.listen(PORT, () => console.log(`App listening on: http://localhost:${PORT}`))

// MAYBE USE THIS FOR DELETING 
// app.post('/api/clear', (req, res) => {
//     // Empty out the arrays of data
//     tableData.length = 0;
//     waitListData.length = 0;

//     res.json({ ok: true });
//   });
// };
