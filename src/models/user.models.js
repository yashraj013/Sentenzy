import mongoose from "mongoose"

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    useremail: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        min: 6
        
    },
    preferredTime: {
        type: Date,
        required: true
    },
    verifyOtp: {
        type: String,
        default: ""
    },
    verifyOtpExpiredAt: {
        type: Number,
        default: 0
    },
    isAccountVerified: {
        type: Boolean,
        default: false
    },
    resetOtp: {
        type: String,
        default: ""
    },
    resetOtpExpiredAt: {
        type: Number,
        defautl: 0
    }

},
{
    timestamps: true
});

export const userModel = mongoose.model("user", userSchema);