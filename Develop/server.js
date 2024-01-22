const express = require('express');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const cors = require('cors');
const path = require("path")
let database = require('./db/db.json')

const app = express();
const PORT = process.env.PORT || 4444;
//localhost:4444/

app.use(express.json());
app.use(express.static('public'));
app.use(cors());

app.get('/', (req, res) => {
    // Handle the request for the notes.html file
    res.sendFile(path.join(__dirname, './public/index.html'));
});

app.get('/notes', (req, res) => {
    // Handle the request for the index.html file
    res.sendFile(path.join(__dirname, './public/notes.html'));
});

app.get('/api/notes', (req, res) => {

    fs.readFile('./db/db.json', 'utf8', (err, data) => {
        if (err) {
            console.log(err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        const notes = JSON.parse(data);

        res.json(notes);
    });
});

app.post('/api/notes', (req, res) => {
    // request makes is where front end requests for changes to be
    //made in db
    const newNote = req.body;

    newNote.id = uuidv4();


    database.push(newNote);

    fs.writeFileSync('./db/db.json', JSON.stringify(database), (err) => {
        if (err) {
            console.log(err);
            return res.status(500).json({ error: 'Failed to save the note.' });
        }
    });

    //reponse of changes sent from backend to front end so that front end reflects changes
    res.json(database);

    // });
});

app.delete('/api/notes/:id', (req, res) => {
    const noteId = req.params.id;

    fs.readFile('./db/db.json', 'utf8', (err, data) => {
        if (err) {
            console.log(err);
            return res.status(500).json({ error: 'Failed to read the notes.' });
        }
        const notes = JSON.parse(data);
        const updatedNotes = notes.filter((note) => note.id !== noteId);

        fs.writeFile('./db/db.json', JSON.stringify(updatedNotes), (err) => {
            if (err) {
                console.log(err);
                return res.status(500).json({ error: 'Failed to delete the note.' });
            }

            // Update the database variable with the updated notes
            database = updatedNotes;

            res.json({ message: 'Note deleted successfully.' });
        });
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on:${PORT}`);
});