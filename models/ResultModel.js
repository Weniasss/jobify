import mongoose, { mongo } from "mongoose";

const ResultSchema = new mongoose.Schema({
    name: String,
    language: String,
    score: String,
    userId: String,
    userName: String
})

export default mongoose.model('Result', ResultSchema)
