// Intitialize Dependencies
const port = 4000;
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const path = require('path');
const cors = require('cors');

app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose
    .connect('mongodb+srv://korir:Kipkorir321@cluster0.6n9ehqk.mongodb.net/e-commerse')
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));

// API Creation
app.get('/', (req, res) => {
    res.send("Express app running");
})

// Image Storage Engine
const storage = multer.diskStorage({
    destination: './upload/images',
    filename: (req, file, cb) => {
        cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
    }
});

app.listen(port, (error) => {
    if(error) {
        console.log("error" + error);
    } else {
        console.log("Server is running on port: " + port);
    }
})