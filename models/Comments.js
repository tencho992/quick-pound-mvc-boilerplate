const mongoose = require("mongoose");

const CommentsSchema = new mongoose.Schema({
    postid: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    }, 
    comment: {
        type: String,
        required: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("Comments", CommentsSchema);
