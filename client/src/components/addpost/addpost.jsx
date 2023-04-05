import {React, useState, useEffect} from 'react'

function addpost() {
    const [title, settitle] = useState("");
    const [description, setdescription] = useState("");

    const addposts = async ()=>{
        console.log(title, description);
        const res = await fetch("/api/addblog", {
          method: "POST",
          body: JSON.stringify({
            blog: {
                title:title,
                description:description
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
      <input type='text' value={title} onChange={(e)=>{settitle(e.target.value)}}/>
      <input type='text' value={description} onChange={(e)=>{setdescription(e.target.value)}}/>
      <button onClick={()=>{addposts}}>Add Post</button>
    </div>
  )
}

export default addpost
