import {React, useState, useEffect} from 'react'

function Home() {

    const [blogs, setsblogs] = useState([]);

    useEffect(() => {
        const res = fetch('/api/fetchallblog',{
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
        })
        const data = res.json();
        if(res.status===201){setsblogs(data)}
        else{console.log("problem in Loading!")}
    }, []);


  return (
    <div>
      {
        blogs.map((elem, key)=>{
            return(
                <h1 key={key}>{elem}</h1> // pagination
            )
        })
      }
    </div>
  )
}

export default Home
