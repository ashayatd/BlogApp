const blog = require("../../models/blog");
const jwt = require("jsonwebtoken");

async function addBlog(req, res) {

    try {
        let userCreated = jwt.verify(req.cookies.jwt, process.env.SECRET_KEY)._id;
        let { title, description } = req.body; // input from user

        if (!(title)) {
            res.status(200);
            return res.send(JSON.stringify({ message: "Please Fill The Box!" }));
        }
        const blogCreate = await blog.create({
            blog: {
                title,
                description
            },
            userCreated
        });
        return res.status(201).json({msg:"Blog Successfully created"});

    } catch (err) {
        console.log("Error in Add Blog route:", err.message);
        return res.status(200);
    }

}

module.exports = addBlog;