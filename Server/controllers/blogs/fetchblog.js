const blog = require("../../models/blog");
const jwt = require("jsonwebtoken");

async function fetchblog(req, res) {
    try {
        let user = jwt.verify(req.cookies.jwt, process.env.SECRET_KEY)._id;
        const blogs = await blog.find({userCreated:user});
        return res.status(201).json(blogs);
    } catch (err) {
        console.log("Error in fetch blogs route:", err.message);
        return res.status(200);
    }
}

module.exports = fetchblog;