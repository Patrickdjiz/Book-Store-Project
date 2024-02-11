// thie file is for handling routes which is the response to a request

import express from "express";
import { createBook } from '../controllers/bookController'

const router = express.Router()

// '/' is local host port 5555/ so the room domain

// POST router to create a new workout
router.post('/books', createBook)

export default router;