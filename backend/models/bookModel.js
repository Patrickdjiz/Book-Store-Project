import mongoose from "mongoose"

// creating our bookSchema
const bookSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
         author: {
            type: String,
            required: true,
        },
        publishYear: {
            type: Number,
            required: true,
            
        },
    },
    {timestamps: true}
);

// exporting the bookSchema as a model
export const Book = mongoose.model('Book', bookSchema)