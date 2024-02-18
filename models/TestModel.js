import mongoose from "mongoose";

const InfoSchema = new mongoose.Schema({
    question: String,
    correctAnswer: String,
    choices: [String]
})

const TestSchema = new mongoose.Schema({
    questionsTest: [InfoSchema],
    name: String,
    language: String,
    tags: String,
    difficulty: String,
});


export default mongoose.model('Test', TestSchema)