import mongoose from "mongoose";
// import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
    
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        trim: true,

    },
    fullName: {
        type: String,
        required: [true, "Full name is required"],
        trim: true,
    },
    password: {
        type: String,
        trim: true,
        required: [true, "Password is required"],
        minlength: [6, "Password must be at least 6 characters"],
    },
    profilePic: {
        type: String,
        default: "",
    },

    phone: {
        type: String,
        default: null,
        trim: true,
        minlength: [10, "Phone number must be at least 10 digits"],
        maxlength: [10, "Phone number cannot exceed 10 digits"],
    },

    role: {
        type: String,
        enum: ["teacher", "student"],
        required: [true, "Role is required"],
    }
},
{timestamps: true, discriminatorKey: "role"});


// //hash password before saving
// userSchema.pre("save", async function (next) {
//     if(!this.isModified("password")) return next();
//     this.password = await  bcrypt.hash(this.password, 10);
//     next();
// })

//verify user password
userSchema.methods.validatePassword = async function(enteredPassword) {
    
    return await bcrypt.compare(enteredPassword, this.password);
}

const User = mongoose.model("User", userSchema);

export default User;