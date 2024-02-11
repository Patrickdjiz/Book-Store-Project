// thie file is for handling routes which is the response to a request

import express from "express";
import { getBooks, createBook } from '../controllers/bookController.js';

const router = express.Router()

// '/' is local host port 5555/ so the room domain

// GET all books
router.get('/', getBooks)

// POST router to create a new workout
router.post('/', createBook)

export default router;