const mongoose = require("mongoose");

const blogSchema = mongoose.Schema({
    blog: {
            title: { type: String, require: true },
            description: { type: String, require: true, default: null },
        },
    status: { type: Boolean},
    userCreated: {
        type: String,
        required: true,
        }
})

module.exports = mongoose.model("blog", blogSchema);