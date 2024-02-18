import mongoose from "mongoose";

const DiscussSchema = new mongoose.Schema({
    name: String,
    tags: [String],
    commnents: [String],
    text: String
    
});

export default mongoose.model('Discuss', DiscussSchema)


