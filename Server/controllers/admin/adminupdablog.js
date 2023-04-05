const blog = require("../../models/blog");

const adminupdateblog = async (req, res)=>{
    try {
        let { ide, newTitle } = req.body;
        console.log(ide,"  ", newTitle);
        const id = { "_id": ide };
        const newData = {$set: {blog:{title: newTitle}}};
        const update = blog.updateOne(id, newData, (error, res)=>{
            if(error) throw Error;
        });
        if(update){
            console.log("updated");
        }
        return res.status(201);
      } 

    catch (error) {
        console.log("Completeblog Error: ", error.message);
      }
}
module.exports = adminupdateblog;