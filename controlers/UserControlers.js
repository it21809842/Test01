const User = require('../Model/UserModel');

const getAllUsers = async (req, res, next) => {
    let users;

    try {
        users = await User.find();
    } catch (err) {
        console.log(err);
    }

    if (!users) {
        return res.status(404).json({ message: "Users not found" });
    }

    return res.status(200).json({ users });
};

const addUsers = async (req, res, next) => {
    const { name, gmail, age, address } = req.body;
    let user;

    try {
        user = new User({ name, gmail, age, address });
        await user.save();
    } catch (err) {
        console.log(err);
    }

    if (!user) {
        return res.status(500).json({ message: "Unable to add user" });
    }

    return res.status(201).json({ user });
};

const getById = async (req, res, next) => {
    const id = req.params.id;

    let user;

    try {
        user = await User.findById(id);
    } catch (err) {
        console.log(err);
    }

    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json({ user });
};

//update user detail
const updateUser = async (req, res, next) => {
    const id = req.params.id;
    const { name, gmail, age, address } = req.body;

    let user;

    try {
        user = await User.findByIdAndUpdate(id, { name, gmail, age, address }, { new: true });
    } catch (err) {
        console.log(err);
    }

    if (!user) {
        return res.status(404).json({ message: "Unable to update user details" });
    }

    return res.status(200).json({ user });
};


//delete user
//update user detail
const deleteUser = async (req, res, next) => {
    const id = req.params.id;
    const { name, gmail, age, address } = req.body;

    let user;

    try {
        user = await User.findByIdAndDelete(id, { name, gmail, age, address }, { new: true });
    } catch (err) {
        console.log(err);
    }

    if (!user) {
        return res.status(404).json({ message: "Unable to delete user details" });
    }

    return res.status(200).json({ user });
};


module.exports = {
    getAllUsers,
    addUsers,
    getById,
    updateUser,
    deleteUser
};