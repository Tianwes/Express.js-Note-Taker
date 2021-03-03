const db = require('../db/db.json');
const fs = require('fs');
// for unique id's 
// const uniqid = require('uniqid'); 

module.exports = (app) => {
    app.get('/api/notes', (req, res) => res.json(db));


    app.post('/api/notes', (req, res) => {
        db.push(req.body);

        fs.writeFile("../db/db.json", JSON.stringify(db), () => {
            res.json(db);
        });
    });
};
//  later - app.delete()
