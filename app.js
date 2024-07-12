//console.log("Bye");
//mongoose.connect("mongodb+srv://wasana:wasana@cluster1.x8uyb9k.mongodb.net/", {

const express = require("express");
const mongoose = require("mongoose");
const router = require("./Route/UserRoute");

const app= express();

//middle wear
app.use("/users",router)


mongoose.connect("mongodb+srv://wasana:wasana@cluster1.x8uyb9k.mongodb.net/", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Connected to MongoDB"))
    .then(() => {
        app.listen(5000, () => {
            console.log("Server is running on port 5000");
        });
    })
    .catch((err) => console.log(err));

//console.log("wasana");
