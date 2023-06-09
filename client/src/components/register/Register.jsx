import { useState } from "react";
import React from "react";
import "./Register.css";
import { Link, Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Regs() {
  const [email, setemail] = useState("");
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [cpassword, setcpassword] = useState("");
  const [Role, setRole] = useState("user");
  const navigate = useNavigate();

  const registerUser = async (e) => {
    e.preventDefault();
    if (cpassword === password) {
      console.log(email, password, username);
      const res = await fetch("/user/register", {
        method: "POST",
        body: JSON.stringify({
          data: {
            email: email,
            password: password,
            username: username,
            role: Role,
          }, //
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (res.status === 200) {
        window.alert("All Input required! ");
      } else if (res.status === 409) {
        window.alert("Already Register username please login");
      } else if (res.status === 410) {
        window.alert(
          "Registration done, Please Login After Sometime, Admin Authorization will take some time."
        );
      } else {
        window.alert(
          "Registration done, Please Login After Sometime, Admin Authorization will take some time."
        );
        navigate("/");
      }
    } else {
      alert("Password Not matched!");
      return;
    }
  };

  function chaeckSet(e) {
    setcpassword(e.target.value);
  }

  return (
    <div className="main_background">
      <div className="navbarBackground">
        <div className="navbarBackground2"></div>
      </div>{" "}
      <nav>
        <ul id="navbar">
          <li>
            <Link Link to="/" className="Link">
              Home
            </Link>
          </li>
          <li>
            <Link Link to="/about" className="Link">
              About
            </Link>
          </li>
        </ul>
      </nav>
      <Outlet />
      <div className="reg-main-div">
        <div className="register-container">
          <form method="POST" className="register-form">
            <h1 className="form-title">Register</h1>

            <div className="form-group">
              <label className="label">Email</label>
              <input
                name="email"
                onChange={(e) => {
                  setemail(e.target.value);
                }}
                value={email}
                type={"email"}
                className="input-fields"
              />
            </div>

            <div className="form-group">
              <label className="label">Username</label>
              <input
                name="Username"
                onChange={(e) => {
                  setusername(e.target.value);
                }}
                value={username}
                type={"name"}
                className="input-fields"
              />
            </div>

            <div className="form-group">
              <label className="label">Password</label>
              <input
                name="Password"
                onChange={(e) => {
                  setpassword(e.target.value);
                }}
                value={password}
                type={"password"}
                className="input-fields"
              />
            </div>

            <div className="form-group">
              <label className="label">Confirm Password</label>
              <input
                name="cpassword"
                onChange={chaeckSet}
                value={cpassword}
                type={"password"}
                className="input-fields"
              />
              <br />
            </div>
            <div className="form-group">
              <label className="label">Role</label>

              <select
                className="select-tag"
                onChange={async (e) => {
                  setRole(e.target.value);
                }}
              >
                <option defaultChecked={true} value={"author"} classNam="options">
                  Autor
                </option>
                <option value={"admin"} className="select-tag">
                  Admin
                </option>
              </select>
              <br />
            </div>

            <div className="button-div">
              <button onClick={registerUser} className="button">
                Register
              </button>
            </div>
          </form>
          <img
            src="https://productsinsights.com/wp-content/uploads/2023/02/Untitled-design-20.png"
            className="register-side-image"
            alt="basicImage"
          />
        </div>
      </div>
    </div>
  );
}
