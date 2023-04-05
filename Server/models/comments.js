const mongoose = require("mongoose");

const commentSchema = mongoose.Schema({
    description:{type:String, default:null},
    userCreated: {
        type: String,
        required: true,
        }
})

module.exports = mongoose.model("comment", commentSchema);