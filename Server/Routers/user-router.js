const express = require("express");
const routes = express.Router();

const register = require("../controllers/user/register-user");
const authenticateUser = require("../controllers/user/authenticateUser");
const comment = require("../controllers/user/comment-user");
const fetchcomment = require("../controllers/user/fetchcomment");

routes.post("/register", register);
routes.post("/authenticate", authenticateUser);
routes.post("/comment",comment);
routes.get("/fetchcomment", fetchcomment);

module.exports = routes;