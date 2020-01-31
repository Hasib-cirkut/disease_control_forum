const express = require('express')

const router = express.Router()

const PostModel = require('../Models/Post')


router.get('/', (req, res)=>{
    res.send('Here in posts')
})

router.post('/', async (req, res)=>{
    let post = new PostModel({
        title:  req.body.title, 
        author: req.body.author,
        body:   req.body.body
    })
    try{

        let savedPost = await post.save()
        res.json(savedPost)

    }catch(err){

        res.json({message: err})
        
    }
})


module.exports = router