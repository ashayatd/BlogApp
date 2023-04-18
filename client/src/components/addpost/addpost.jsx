import {React, useState} from 'react'

function Addpost() {
    const [Title, setTitle] = useState("");
    const [Description, setDescription] = useState("");

    const addposts = async ()=>{
        console.log(Title, Description);
        const res = await fetch("/api/addblog", {
          method: "POST",
          body: JSON.stringify({
            blog: {
                title:Title,
                description:Description
            }, 
          }),
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (res.status === 200) {
          window.alert("All Input required! ");
        } else {
          window.alert(
            "Your post is Live Now"
          );
        }
            }

  return (
    
    <div>
      <input type='text' value={Title} onChange={(e)=>{setTitle(e.target.value)}}/>
      <input type='text' value={Description} onChange={(e)=>{setDescription(e.target.value)}}/>
      <button onClick={()=>{addposts()}}>Add Post</button>
    </div>
  )
}

export default Addpost
