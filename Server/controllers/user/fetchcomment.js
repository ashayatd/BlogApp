const comment = require("../../models/comments");

const fetchcomment = async (req, res)=>{

    let {blogId} = req.body;
    console.log("reached Fetch comment", blogId);
    try {
        const findcomment =  await comment.find({blogId:blogId});
        if(findcomment){
            return res.status(200).json(findcomment); 
        }
        else{
            return res.status(201).json({msg: "No comment Found"});
        }
    } catch (error) {
        console.log(error);
    }
}
module.exports = fetchcomment;