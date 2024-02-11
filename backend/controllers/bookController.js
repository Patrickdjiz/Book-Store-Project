
import Book from '../models/bookModel'
import mongoose from 'mongoose'

// creating a new book
const createBook = async (req, res) => {
    const {title, author, publishYear} = req.body

     /* error handling */
     let emptyFields = [] // if a user is creating a book and they leave empty fields we will track that

     if(!title) {
         emptyFields.push('title')
     }
     if(!author) {
         emptyFields.push('author')
     }
     if(!publishYear) {
         emptyFields.push('publishYear')
     }
     if(emptyFields.length > 0) {
         return res.status(400).json({ error: 'Please fill in all fields', emptyFields})
     }

     // adds document to database
    try {
        const book = await Book.create({title, author, publishYear}) // we are creating a book from our model and then storing it into the book constant
        res.status(200).json(book) // status 200 means good. The json we are sending back is the book object/document
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

export { createBook }
