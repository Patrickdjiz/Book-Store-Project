
import Book from '../models/bookModel.js'
import mongoose from 'mongoose'

// getting all books from database
const getBooks = async (req, res) => {
    // we are finding all the workouts so its an empty curly brackets as no workout is specified which then creates an array
    // we sort it at createdAt -1 so that it is in decsending order with the newest ones at the top
    const books = await Book.find({}).sort({createdAt: -1})

    res.status(200).json(books)
}

const getBook = async (req, res) => {
    const {id} = req.params // the id is within the request parameters when we send the path
    
    if(!mongoose.Types.ObjectId.isValid(id)) { // this method checks if the id is not a valid id type e.g Strings
        return res.status(404).json({error: 'No such book'})
    }

    const book = await Book.findById(id)

    // check if the book does not exist from the id
    if(!book) {
        return res.status(404).json({error: 'No such book'})
    }

    res.status(200).json(book)
}

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

// updating a book
const updateBook = async (req,res) => {
    const {id} = req.params
    
    if(!mongoose.Types.ObjectId.isValid(id)) {
        res.status(404).json({error: 'No such book'})
    }

    const book = await Book.findByIdAndUpdate(id, req.body)

    if(!book) {
        res.status(404).json({error: 'No such book'})
    }

    res.status(200).json(book)
}

// delete a book
const deleteBook = async (req,res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        res.status(404).json({error: 'No such book'})
    }

    const book = await Book.findByIdAndDelete(id)

    if(!book) {
        res.status(404).json({error: 'No such book'})
    }

    res.status(200).json(book)
}

export { getBooks, getBook, createBook, updateBook, deleteBook };
