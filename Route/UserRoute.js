const express = require("express");
const router = express.Router();
//Insert Model
const User = require("../Model/UserModel");

//insert controller
const UserControler = require("../controlers/UserControlers");

router.get("/", UserControler.getAllUsers);

//export
module.exports = router;
