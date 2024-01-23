# expressnotetaker

![Note Taker](<express notes.PNG>)

## Description

Note Taker is a web application that allows users to write and save notes. The application uses an Express.js back end to store and retrieve note data from a JSON file. Users can create new notes, view existing notes, and delete notes if needed.

## Table of Contents

Installation

Usage

API Routes

Deployment

Contributing

License


## Installation

To install and run the Note Taker application locally, follow these steps:

Clone the GitHub repository to your local machine.

Open a terminal and navigate to the project's root directory.

Run the command npm install to install the required dependencies.

Start the application by running the command npm start.

Open a web browser and visit http://localhost:4444 to access the application.

## Usage

When you open the Note Taker application, you will be presented with a landing page that includes a link to the notes page. Clicking on the link will take you to the notes page, where you can view existing notes and create new ones.


To create a new note:



Enter a title and the text of the note in the right-hand column.

Click the "Save Note" button in the navigation at the top of the page.

The new note will be saved and appear in the left-hand column with the other existing notes.


To view an existing note:



Click on a note in the list in the left-hand column.

The selected note will appear in the right-hand column.

A "New Note" button will appear in the navigation at the top of the page.


To delete a note (bonus functionality):



Click on the trash can icon next to the note you want to delete.

The note will be removed from the list.

## API Routes

The Note Taker application includes the following API routes:



GET /api/notes: This route reads the db.json file and returns all saved notes as JSON.

POST /api/notes: This route receives a new note to save on the request body, adds it to the db.json file, and returns the new note to the client. Each note is given a unique id when it's saved.


Note: The application also offers a bonus DELETE route (DELETE /api/notes/:id) to delete a note by its id. However, this functionality is not covered in the course material.

## Deployment

The Note Taker application can be deployed to Heroku. To deploy the application, follow these steps:



Create a new Heroku app.

Connect the Heroku app to the GitHub repository.

Enable automatic deploys for the Heroku app.

Deploy the application by manually triggering a deployment or pushing changes to the GitHub repository.

## Contributing

Contributions to the Note Taker application are welcome! If you find any issues or have suggestions for improvement, please submit a pull request.

## License 

This project is licensed under the MIT License.

[Note taker link](https://dansexpressnotetaker.onrender.com)


[GitHub](https://dann9109.github.io/expressnotetaker/)

