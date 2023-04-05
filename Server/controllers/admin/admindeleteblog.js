const blog = require("../../models/blog");

const admindeleteblog = async (req, res)=>{
    try {
        let { ide } = req.body;
        const result = await blog.deleteOne( { "_id" : ide});
        return res.status(201);
      } 
      catch (error) {
        console.log("Error in Delete blog function:", error.message);
      }
}
module.exports = admindeleteblog;