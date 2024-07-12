const express = require('express');
const mongoose = require('mongoose');
const userRouter = require('./Route/UserRoute');

const app = express();

// middleware
app.use(express.json());
app.use('/users', userRouter);

mongoose.connect('mongodb+srv://wasana:wasana@cluster1.x8uyb9k.mongodb.net/')
    .then(() => console.log('Connected to MongoDB'))
    .then(() => {
        app.listen(5000, () => {
            console.log('Server is running on port 5000');
        });
    })
    .catch((err) => console.log(err));
