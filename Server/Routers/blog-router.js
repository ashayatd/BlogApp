const express = require("express");
const routes = express.Router();

const addblog = require("../controllers/blogs/addblog");
const fetchblog = require("../controllers/blogs/fetchblog");
const deleteblog = require("../controllers/blogs/deleteblog");
const updateblog = require("../controllers/blogs/updateblog");
const username = require("../controllers/blogs/username");
const authenticate = require("../middleware/authenticate");


routes.post("/addblog",authenticate, addblog );
routes.get("/fetchblog",authenticate, fetchblog );
routes.post("/deleteblog",authenticate, deleteblog );
routes.post("/updateblog",authenticate, updateblog );
routes.get('/username',authenticate, username);


module.exports = routes;