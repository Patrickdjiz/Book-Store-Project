import express from "express";
import { PORT, mongoDBURL } from "./config.js"
import mongoose from 'mongoose'
import { Book } from './models/bookModel.js'

const app = express();

// middleware for parsing request body
app.use(express.json());

// the get route is the http method that generally is used for getting a resource from a server
app.get('/', (req,res) => {
    console.log(req)
    return res.status(234).send('Welcome to MERN Stack')
});

// route for saving/posting a new book
app.post('/books', async (req, res) => {
    // try catch response incase of error
    try {
        // checking if all required fields are inputted. The body of the req object stores these input fields
        if (
            !req.body.title ||
            !req.body.author ||
            !req.body.publishYear 
        ) {
            return res.status(400).send({
                message: 'Send all required fields: title, author, publishYear',
            })
        }

        // if the user has filled out the title, author and publishYear then we create the newBook
        const newBook = {
            title: req.body.title,
            author: req.body.author,
            publishYear: req.body.publishYear
        }

        const book = await Book.create(newBook); // create the new Book with the Book module we imported

        return res.status(201).send(book); // we send back the book we created

    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message })
    }
})

// we only want the app to listen to our PORT if we are able to first connect to our db
mongoose.connect(mongoDBURL)
    .then(() => {
        console.log('App connected to database');
        app.listen(PORT, () => { // the app will listen to connections to a port and return a http.Server is returned
            console.log('App is listening to port:', PORT);
        });
    })
    .catch((error) => {
        console.log(error)
    });