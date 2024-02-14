import express from "express";
import { PORT, mongoDBURL } from "./config.js"
import mongoose from 'mongoose'
import cors from 'cors'

const app = express();

import router from './routes/book.js';

// middleware for parsing request body
app.use(express.json());

// Middleware for handling CORS (Cross-Origin Resource Sharing) Policy
// CORS is web security mechanism that prevents unauthorized cross-origin access to a resource or server 
app.use(cors());

// we are sending any request to our routes file and with express.json above, it sends any data to the request body with it
app.use('/books', router)


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