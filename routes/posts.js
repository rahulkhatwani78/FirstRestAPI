const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

// router.get('/', (req, res) => {
//     res.send("We are on Posts");
// });

// router.post('/', (req, res) => {
//     const post = new Post({
//         title: req.body.title,
//         description: req.body.description
//     });

//     post.save()
//     .then(data => {
//         res.json(data);
//     })
//     .catch(err => {
//         res.json({message: err});
//     })
// });

// With Async-Await

// Get all the posts
router.get('/', async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch (err) {
        res.json({message: err});
    }
});

// Store a post to DB
router.post('/', async (req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });

    try {
        const savedPost = await post.save();
        res.json(savedPost);
    } catch (err) {
        res.json({message: err});
    }
});

// Get a specific post
router.get('/:postId', async (req, res) => {
    // console.log(req.params.postId);
    try {
        const specificPost = await Post.findById(req.params.postId);
        res.json(specificPost);
    } catch (err) {
        res.json({message: err});
    }
});

// Delete a specific post
router.delete('/:postId', async (req, res) => {
    try {
        const deletedPost = await Post.deleteOne({_id: req.params.postId});
        res.json(deletedPost);
    } catch (err) {
        res.json({message: err});
    }
});

// Update a specific post
router.patch('/:postId', async (req, res) => {
    try {
        const updatedPost = await Post.updateOne({_id: req.params.postId}, {title: req.body.title});
        res.json(updatedPost);
    } catch (err) {
        res.json({message: err});
    }
});

module.exports = router;