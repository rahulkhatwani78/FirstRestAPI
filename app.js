const express = require('express');
const app = express();
require('dotenv/config');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

//Middlewares
// app.use('/posts', () => {
//     console.log("This is a middleware");
// });
app.use(bodyParser.json());
app.use(cors());

// Import Routes
const postsRoute = require('./routes/posts');
app.use('/posts', postsRoute); // Middleware

// Routes
app.get('/', (req, res) => {
    res.send("We are on Home");
});

mongoose.connect(
    process.env.DB_CONNECTION,
 () => console.log("Connected to DB")
);

// Hpw to start listening to the server
app.listen(3000, () => console.log("Server Started"));