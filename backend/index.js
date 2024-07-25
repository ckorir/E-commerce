// Load environment variables from .env file
require('dotenv').config();

// Intitialize Dependencies
const port = 4000;
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const path = require('path');
const cors = require('cors');
const { type } = require('os');

app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose
    .connect(process.env.MONGO_URI)
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

const upload = multer({
    storage: storage
});

// Create upload endpoint for Images
app.use('/images', express.static('upload/images'));

app.post('/upload', upload.single('product'), (req, res) => {
    res.json({
        success: 1,
        image_url: `http://localhost:${port}/images/${req.file.filename}`
    });
});

// Schema for creating products
const Product = mongoose.model('Product', {
    id:{
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    new_price: {
        type: Number,
        required: true
    },
    old_price: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    available: {
        type: Boolean,
        default: true
    }
})

// API for adding products
app.post('/addproduct', async (req, res) => {
    try {
        let products = await Product.find({});
        let id;
        if (products.length >0) {
            let last_product_array = products.slice(-1);
            let last_product = last_product_array[0];
            id = last_product.id + 1;
        } else{
            id = 1;
        }
        const product = new Product({
            id: id,
            name: req.body.name,
            image: req.body.image,
            category: req.body.category,
            new_price: req.body.new_price,
            old_price: req.body.old_price
        });
        
        console.log(product);
        await product.save();
        console.log("saved");

        res.json({
            success: true,
            name: req.body.name,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'An error occurred' });
    }
});

// API for deleting products
app.post('/removeproduct', async (req, res) => {
    try {
        await Product.findOneAndDelete({id:req.body.id});
        console.log("Product removed")
        if (!Product) {
            return res.status(404).json({
                success: false,
                message: 'Product not found'
            });
        }
        res.json({
            success: true,
            name: req.body.name,
            message: 'Product deleted successfully'
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'An error occurred' });
    }
})

// API for getting all products
app.get('/allproducts', async (req, res) => {
    try {
        let products = await Product.find({});
        console.log("All products fetched");
        res.json(products);
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'An error occurred' });
    }
})

//Schema for user creation
const Users = mongoose.model('Users', {
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    cartData: {
        type: Object,
    },
    date: {
        type: Date,
        default: Date.now,
    }
})

// API for creating users
app.post('/signup', async (req, res) => {
    try {
        let check = await Users.findOne({email: req.body.email});
        // Check for user
        if (check) {
            return res.status(400).json({
                success: false,
                message: 'User already exists'
            });
        }
        // Cart Data
        let cart = {};
        for (let i = 0; i < 300; i++) {
            cart[i] = 0;
        }
        // Users Model
        const user = new Users({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
            cartData: cart,
        });
        await user.save();
        // Creating Token
        const data = {
            user: {
                id: user.id
            }
        };
    
        const token = jwt.sign(data, 'secret_ecom');
        res.json({
            success: true,
            token: token
        });
    }catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'An error occurred' });
    }
})

// API for login
app.post('/login', async (req, res) => {
    try {
        let user = await Users.findOne({email: req.body.email});
        // Check for user
        if (!user) {
            return res.status(400).json({
                success: false,
                message: 'User does not exist'
            });
        }
        if (user.password !== req.body.password) {
            return res.status(400).json({
                success: false,
                message: 'Incorrect password'
            });
        }
        // Creating Token
        const data = {
            user: {
                id: user.id
            }
        };

        const token = jwt.sign(data, 'secret_ecom');
        res.json({
            success: true,
            token: token
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'An error occurred' });
    }
})

// API for getting popular in women
app.get('/popular', async (req, res) => {
    try {
        let products = await Product.find({category: "women"});
        let popular = products.slice(0,4);
        console.log("Popular fetched");
        res.send(popular);
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'An error occurred' });
    }
})

// API for getting new collection
app.get('/newcollection', async (req, res) => {
    try {
        let products = await Product.find({available: true});
        let newCollection = products.slice(1).slice(-8);
        console.log("New collection fetched");
        res.send(newCollection);
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'An error occurred' });
    }
})

// Creating middleware to fetch user
const fetchUser = async (req, res, next) => {
    const token = req.header('auth-token');
    if (!token) {
        res.status(401).send({ error: "Please authenticate using a valid token" });
    } else {
        try{
            const data = jwt.verify(token, 'secret_ecom');
            req.user = data.user;
            next();
        }catch(error){
            res.status(401).send({ error: "Please authenticate using a valid token" });
        }
    }
}

// API for creating cart
app.post('/addtocart', fetchUser, async (req, res) => {
    try{
        console.log("Added",req.body.itemId);
        let userData = await Users.findOne({_id: req.user.id});
        userData.cartData[req.body.itemId] =  +1;
        await Users.findOneAndUpdate({_id: req.user.id},{cartData: userData.cartData});
        res.send("Added");
    }catch(error){
        console.error(error);
        res.status(500).json({ success: false, message: 'An error occurred' });
    }
})

// API for removing from cart
app.post('/removefromcart', fetchUser, async (req, res) => {
    try{
        console.log("Removed",req.body.itemId);
        let userData = await Users.findOne({_id: req.user.id});
        userData.cartData[req.body.itemId] -= 1;
        await Users.findOneAndUpdate({_id: req.user.id},{cartData: userData.cartData});
        res.send("Removed");
    }catch(error){
        console.error(error);
        res.status(500).json({ success: false, message: 'An error occurred' });
    }
})




app.listen(port, (error) => {
    if(error) {
        console.log("error" + error);
    } else {
        console.log("Server is running on port: " + port);
    }
})