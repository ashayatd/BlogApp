const blog = require("../../models/blog");

const updateblog = (req, res)=>{
    try {
        let { ide, newTitle, newdescription } = req.body; // descrioption
        console.log(ide,"  ", newTitle, " ", newdescription);
        const id = { "_id": ide };
        const newData = {$set: {blog:{title: newTitle, description: newdescription}}};
        const update = blog.updateOne(id, newData, (error, res)=>{
            if(error) throw Error;
        });
        if(update){
            console.log("blog updated");
        }

        return res.status(201);
      } catch (error) {
        console.log("Update blog Error: ", error.message);
      }
}
 module.exports = updateblog;