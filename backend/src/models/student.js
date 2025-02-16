import { User } from "./index.js"
import mongoose from "mongoose"
//User is the BASE model

const studentSchema = new mongoose.Schema({
    attendance: {
        type: Number,
        required: true,
        default: 0,
        min: [0, "Attendance cannot be negative"], 
        max: [100, "Attendance cannot be more than 100"],
    },
    cohort: {
        type: Number, //like 5
        required: true,
    },
    //add scores and assignments later
})

const Student = User.discriminator("Student", studentSchema);

export default Student;