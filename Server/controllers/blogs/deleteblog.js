const blog = require("../../models/blog");

const deleteblog = async (req, res) => {
  try {
    let { ide } = req.body;
    const result = await blog.deleteOne( { "_id" : ide});
    if(result){
      return res.status(201).json({msg:"succefully deleted"});
    }
  } 
  catch (error) {
    console.log("Error in Delete blog function:", error.message);
  }
};

module.exports = deleteblog;
