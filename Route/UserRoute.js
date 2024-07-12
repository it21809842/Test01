const express = require("express");
const router = express.Router();
//Insert Model
const User = require("../Model/UserModel");

//insert controller
const UserControler = require("../controlers/UserControlers");

router.get("/", UserControler.getAllUsers);
router.post("/", UserControler.addUsers);
router.get("/:id", UserControler.getById);


//export
module.exports = router;
