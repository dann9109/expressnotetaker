const express = require('express');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const cors = require('cors');

const app = express();
const PORT = 3434;

app.use(express.json());
app.use(express.static('./develop/public'));
app.use(cors());
// app.get('/develop/public/notes.html', (req, res) => {
//     // Handle the request for the notes.html file
//     res.sendFile(__dirname + '/notes.html');
// });

// // app.get('*', (req, res) => {
// //     // Handle the request for the index.html file
// //     res.sendFile(__dirname + '/index.html');
// })

app.get('/api/notes', (req, res) => {
    fs.readFile('db.json', 'utf8', (err, data) => {
        if (err) {
            console.log(err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        const notes = JSON.parse(data);
        res.json(notes);
    });
});

app.post('/api/notes', (req, res) => {
    const newNote = req.body;
    newNote.id = uuidv4();

    fs.readFile('db.json', 'utf8', (err, data) => {
        if (err) {
            console.log(err);
            return res.status(500).json({ error: 'Failed to read the notes.' });
        }
        const notes = JSON.parse(data);
        notes.push(newNote);

        fs.writeFile('db.json', JSON.stringify(notes), (err) => {
            if (err) {
                console.log(err);
                return res.status(500).json({ error: 'Failed to save the note.' });
            }
            res.json(newNote);
        });
    });
});

app.delete('/api/notes/:id', (req, res) => {
    const noteId = req.params.id;

    fs.readFile('db.json', 'utf8', (err, data) => {
        if (err) {
            console.log(err);
            return res.status(500).json({ error: 'Failed to read the notes.' });
        }
        const notes = JSON.parse(data);
        const updatedNotes = notes.filter((note) => note.id !== noteId);

        fs.writeFile('db.json', JSON.stringify(updatedNotes), (err) => {
            if (err) {
                console.log(err);
                return res.status(500).json({ error: 'Failed to delete the note.' });
            }
            res.json({ message: 'Note deleted successfully.' });
        });
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on:${PORT}`);
});