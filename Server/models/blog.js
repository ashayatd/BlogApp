const mongoose = require("mongoose");

const blogSchema = mongoose.Schema({
    task: {
            title: { type: String, require: true },
            description: { type: String, require: false, default: null },
        },
    status: { type: Boolean},
    userCreated: {
        type: String,
        required: true,
        }
})

module.exports = mongoose.model("blog", blogSchema);