import mongoose from "mongoose"

const sentenceSchema = mongoose.model({
    sentence: {
        type: String
    },
    meaning: {
        type: String

    },
    usage: {
        type: String
    },
    audiourl: {
        type: String
    }
},
{
    timestamps: true
});

export const sentence = mongoose.model("sentence", sentenceSchema);