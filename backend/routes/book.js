// thie file is for handling routes which is the response to a request

import express from "express";
import { getBooks, getBook, createBook, updateBook, deleteBook } from '../controllers/bookController.js';

const router = express.Router()

// '/' is local host port 5555/ so the room domain

// GET all books
router.get('/', getBooks)

// GET a single book
router.get('/:id', getBook)

// POST router to create a new workout
router.post('/', createBook)

// UPDATE a book
router.patch('/:id', updateBook)

// DELETE a book
router.delete('/:id', del)

export default router;