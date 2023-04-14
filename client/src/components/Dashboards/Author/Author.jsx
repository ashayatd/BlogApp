import React from "react";
import "./style.css"; // Import the CSS file for styling
import { Link, Outlet } from "react-router-dom";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    fetchdata();
  }, []);

  const [bloglist, setbloglist] = useState([]);
  const [blog, setblog] = useState([]);
  const [blogid, setblogid] = useState("");

  const showblog = async (e) => {
    try {
      console.log("printed Seperate blog", e.key);

      const Temp = bloglist.filter((elem, ind) => {
        return elem._id === e.key;
      });
      setblog(Temp);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchdata = async () => {
    try {
      console.log("Fetch Data executed");
      const res = await fetch("/api/fetchblog", {
        method: "GET",
        header: {
          Accept: "application/json",
          "Content-type": "application/json",
        },
      });
      if (res.status !== 201) {
        console.log(`Error in Admin request`, res.status);
      } else if (res.status === 201) {
        const temp = await res.json();
        setbloglist(temp);
      }
    } catch (error) {
      console.log("Error in Admin: ", error);
    }
  };

  const deleteblog = async () => {
    try {
      const res = await fetch(`api/deleteblog`, {
        method: "POST",
        body: JSON.stringify({ ide: blogid }),
        header: {
          Accept: "application/json",
          "Content-type": "application/json",
        },
      });
      if (res.status === 201) {
        window.alert("successfully deleted");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <ul id="adminnavbar">
          <li>
            <Link Link to="/" className="Link">
              Login
            </Link>
          </li>
          <li>
            <Link Link to="/about" className="Link">
              About
            </Link>
          </li>
          <li>
            <Link Link to="/register" className="Link">
              Register
            </Link>
          </li>
          <li>
            <Link Link to="/AddBlog" className="Link">
              AddBlog
            </Link>
          </li>
        </ul>
      </nav>
      <Outlet />

      {/* Sidebar */}
      <aside className="sidebar">
        <ul>
          {bloglist.map((elem, key) => {
            return (
              <li
                key={elem._id}
                onClick={(e) => {
                  setblogid(elem._id);
                  showblog(e);
                }}
              >
                {elem.title}
              </li>
            );
          })}
        </ul>
      </aside>

      {/* Body */}
      <main className="main-content">
        {blog.map((elem, key) => {
          return (
            <React.Fragment key={key}>
              <h1
                contentEditable={true}
                spellCheck={false}
                onBlur={(e) => {
                  UpdateDataTitle(name._id, e.target.innerText);
                  console.log(e.target.innerText);
                }}
              >
                {elem.title}
              </h1>
              <p contentEditable={true} spellCheck={false}>
                {elem.description}
              </p>
            </React.Fragment>
          );
        })}
      </main>

      {/* Div at the bottom of body */}
      <div className="bottom-div">
        <button>Update</button>
        <button
          onClick={() => {
            // window.warning(`Are you sure to delete the blog?`); // warning
            deleteblog();
          }}
        >
          Delete
        </button>
        <button>
            Add Blog
        </button>
      </div>
    </div>
  );
};

export default App;
