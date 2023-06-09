const jwt = require("jsonwebtoken");
const user = require("../../Server/models/userModel");

const authenticate = async (req, res, next)=>{
    try {
        let token = req.cookies.jwt;
        const verifyToken = jwt.verify(token, process.env.SECRET_KEY);
        const rootUser = user.findOne({
            _id: verifyToken._id, "token":token, "role": "author"
        });
        if(!rootUser){throw new Error(`Author Not Found! Go to Register`)};
        next();

    } catch (error) {
        res.status(402).json(JSON.stringify({msg:"Unauthorised user!"}));
        console.log("Author_atuhenticate: ", error);
    }
}
module.exports = authenticate;