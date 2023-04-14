const blog = require("../../models/blog");

async function fetchblog(req, res) {
    try {
        const blogs = await blog.find();
        return res.status(201).json(blogs);
    } catch (err) {
        console.log("Error in fetch blogs route:", err.message);
        return res.status(200);
    }
}

module.exports = fetchblog;