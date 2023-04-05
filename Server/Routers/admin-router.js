const express = require("express");
const Route = express.Router();
const users = require("../controllers/admin/displayusernames");
const adminupdablog = require("../controllers/admin/adminupdablog");
const admindeleteblog = require("../controllers/admin/admindeleteblog");
const adminauth = require("../../Server/middleware/admin_authenticate");
const makeadmin = require("../controllers/admin/makeadmin");
const authenticate = require("../controllers/admin/authenticate");
const username = require("../controllers/admin/adminusername");
const fetchrequests = require("../controllers/admin/fetchrequests");
const admincreateuser = require("../controllers/admin/admincreateuser");
const admindeleteuser = require("../controllers/admin/admindeletependinguser");

Route.get('/users', adminauth , users);
Route.post('/adminupdablog', adminauth , adminupdablog);
Route.post('/admindeleteblog', adminauth ,  admindeleteblog);
Route.post('/makeadmin', adminauth , makeadmin);
Route.post('/authenticate', authenticate);
Route.get('/username', username );
Route.get('/fetchrequests', fetchrequests);
Route.post('/admincreateuser', admincreateuser);
Route.post('/admindeleteuser', admindeleteuser);

module.exports = Route;