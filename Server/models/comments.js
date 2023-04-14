const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
    description:{type:String, default:null},
    blogId: {type:String,
        requires:true,
    },
    date: {
        type:Date,
        default:Date.now,
        required:true,
    },
    userCreated: {
        type: String,
        required: true,
        }
})

module.exports = mongoose.model("comment", commentSchema);