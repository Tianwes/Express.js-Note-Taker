const db = require('../db/db.json');
const fs = require('fs'); 
const Notes = require('../db/Notes');

module.exports = (app) => {
    app.get('/api/notes', (req, res) => {
        Notes.getNotes().then(notes => res.json(notes)) 
    
     });
    app.post('/api/notes', (req, res) => {
        Notes.writeNote(req.body).then(notes => res.json(notes));

    });

    app.delete('/api/notes/:id', (req, res) => {
        Notes.deleteNote(req.params.id).then(() => res.json({ok:true}))
    })
};
