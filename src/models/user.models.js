import mongoose from "mongoose"

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    useremail: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
        
    },
    preferredTime: {
        
    }
},
{
    timestamps: true
});

export const user = mongoose.model("user", userSchema);