const express = require("express");
const routes = express.Router();

const addblog = require("../controllers/blogs/addblog");
const fetchblog = require("../controllers/blogs/fetchblog");
const deleteblog = require("../controllers/blogs/deleteblog");
const updateblog = require("../controllers/blogs/updateblog");
const username = require("../controllers/blogs/username");
const authenticate = require("../middleware/authenticate");
const fetchallblog = require("../controllers/blogs/fetchallblog");



routes.post("/addblog",authenticate, addblog );
routes.get("/fetchblog",authenticate, fetchblog );
routes.post("/deleteblog", deleteblog );
routes.post("/updateblog", updateblog );
routes.get('/username',authenticate, username);
routes.get('/fetchallblog', authenticate, fetchallblog );


module.exports = routes;