const user = require("../../models/userModel");
const jwt = require("jsonwebtoken");

const usernameField = async (req, res)=>{
    try {
        // let user = jwt.verify(req.cookies.jwt, process.env.SECRET_KEY)._id;
        const rootuser = await user.findOne({token:req.cookies.jwt});
        res.status(201).json({UserName:rootuser.username});

    } catch (error) {
        console.log("error in username route" + error);
    }
}

module.exports = usernameField;
