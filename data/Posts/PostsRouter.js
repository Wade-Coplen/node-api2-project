
const express = require('express');
const Posts = require('./PostsModels');

const router = express.Router();

// router.post('/:owner/:repo/git/refs', (req, res) => {
//     res.status(200).send('yay! you did it!')
// });

//WORKS

router.get('/', (req, res) => {
    Posts.find()
    .then(posts => {
        res
        .status(200).json(posts)
    })
    .catch(err => {
        res.status(500)
        .json({error: "The posts information could not be retrieved." })
    })
})  

//WORKS

// router.get('/:id', (req, res) => {
//     Posts.findById(req.params.id)
//     .then(item => {
//         res.status(200).json(item);
//     })
//         if(req.params.id !== Posts) {
              
//             res.status(404).json({ message: "The post with the specified ID does not exist." })        
//         } else {
//             res.status(500).json({ error: "The post information could not be retrieved." })
//         }
//     })


//WORKS
// router.post('/', (req, res) => {
//     Posts.insert(req.body)
//     .then(item => {
//         res.status(201).json(item)
//     })    
//     .catch(err => {    
//     if(!req.body.title || !req.body.contents) {
//         res.status(400).json({errorMessage: "Please provide title and contents for the post." })
        
//     } else {
//         res.status(500).json({error: "There was an error while saving the post to the database"})
//     }
// })
// })

router.post('/api/posts/:id/comments', (req, res) => {
    Posts.insertComment(req.body)
    .then(item => {
        res.status(201).json(item);
    })
    .catch(err => {
        if(
       res.status(404).json({something})
    })
})

// router.get('/:id/comments', (req, res) => {
//     Posts.findPostComments(req.params.post_id)
//     .then(item => {
//         res.status(200).json(item);
//     })
//     const param = req.params.post_id;
//     if(param !== Posts) {
//         res.status(404).json({ message: "The post with the specified ID does not exist." })
//     } else {
//         res.status(500).json({ error: "The comments information could not be retrieved." })
//     }
// })
 





module.exports = router;