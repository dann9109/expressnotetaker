const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 3434

app.use(express.json());
app.use(express.static('./public'));

app.get('/develop/notes.html', (req, res) => {

});

app.get('/develop/notes.html', (req, res) => {

});


app.get('/api/notes', (req, res) => {
    fs.readFile('db.json', 'utf8', (err, data) => {
        if (err) {
            console.log(err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        // parse the JSON data
        const notes = json.parse(data);

        // return the notes as JSON
        res.json(notes);

    });
});

app.listen(PORT, () => {
    console.log(`Server is running on:${PORT}`);
});