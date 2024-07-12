const User = require("../Model/UserModel");

const getAllUsers = async(req,res,next) => {

    let Users;

    try {
        users = await User.find();
    } catch (err) {
        console.log(err)
    }

    //not found
    if(!users){
        return res.status(404).json({message:"User not founf"});
    }

    //DIsplay all users
    return res.status(200).json({users});
};

exports.getAllUsers = getAllUsers