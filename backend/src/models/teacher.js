import { User } from "./index.js"
import mongoose from "mongoose"
//User is the BASE model

const teacherSchema = new mongoose.Schema({
    expertise: [String],
    experience: {
        type: Number,
        min: [0, "Experience cannot be negative"], 
    }, //in years
    qualification: {
        type: String,
        trim: true,
    }, 
    socialUrls: [String],
})

const Teacher = User.discriminator("Teacher", teacherSchema);

export default Teacher;