const comment = require(`../../models/comments`);
const user = require(`../../models/userModel`);
const jwt = require("jsonwebtoken");

const commentUser = async (req, res)=>{
    console.log("reached inside comment Controller");
    try {
        let {title, username, blogidentity, userCreated} = req.body;
        const finduser =  await user.findOne({username:username});
        // let userCreated = jwt.verify(req.cookies.jwt, process.env.SECRET_KEY)._id;

        if(finduser){
            const createcomment = await comment.create({
                description: title,
                blogId: blogidentity ,
                userCreated: userCreated ,
            });
            if(createcomment){
                console.log("created Comment");
                res.status(200).json({msg:"Commented Successfully"});
            }
            else{
                res.status(201).json({msg: "Problem in Commenting"});
            }
        }
        else{
            console.log("No Such User found");
        }
    } catch (error) {
        console.log(error);
    }

}

module.exports = commentUser;