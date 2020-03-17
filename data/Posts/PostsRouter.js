const express = require('express');
const Posts = require('./PostsModels');

const router = express.Router();

// router.post('/:owner/:repo/git/refs', (req, res) => {
//     res.status(200).send('yay! you did it!')
// });

router.get('/', (req, res) => {
    Posts.find()
    .then(posts => {
        res.status(200).json(posts)
    })
    .catch(err => {
        res.status(500).json({error: "The posts information could not be retrieved." })
    })
})     

router.get('/api/posts/:id', (req, res) => {
    Posts.findById(id)
})

module.exports = router;