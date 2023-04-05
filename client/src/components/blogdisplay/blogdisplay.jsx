import {React, useState, useEffect} from 'react'


function display() {
  const [title, settitle] = useState(["t1","t1","t1","t1"]);

  // useEffect(() => {
    
  // }, []);

  // fetch All Blogs

  return (
    <React.Fragment>
      
      <div>
        {
          title.map((elem, key)=>{
            <h1 key={key}>{elem}</h1>
          })
        } 
      </div>

    </React.Fragment>
  )
}

export default display
